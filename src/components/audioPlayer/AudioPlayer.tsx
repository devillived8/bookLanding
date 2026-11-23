import { useCallback, useEffect, useRef, useState } from 'react';

interface ITrackProps {
  id: number;
  src: string;
  title: string;
}

interface IAudioPlayerProps {
  tracks: ITrackProps[];
}

const AudioPlayer = ({ tracks }: IAudioPlayerProps) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [index, setIndex] = useState(0);
  const [shouldAutoplay, setShouldAutoplay] = useState(false);
  const current = tracks[index];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onLoaded = () => setDuration(audio.duration);
    audio.addEventListener('loadedmetadata', onLoaded);

    return () => audio.removeEventListener('loadedmetadata', onLoaded);
  }, [current.src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    audio.addEventListener('play', onPlay);
    audio.addEventListener('pause', onPause);
    return () => {
      audio.removeEventListener('play', onPlay);
      audio.removeEventListener('pause', onPause);
    };
  }, [current.src]);

  const formatTime = (sec: number) => {
    if (!Number.isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60);
    return `${m}:${String(s).padStart(2, '0')}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () => setCurrentTime(audio.currentTime);
    console.log('timeupdate', audio.currentTime);
    audio.addEventListener('timeupdate', onTime);
    return () => audio.removeEventListener('timeupdate', onTime);
  }, [current.src]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onVolume = () => {
      setVolume(audio.volume);
    };
    audio.addEventListener('volumechange', onVolume);

    return () => audio.removeEventListener('volumechange', onVolume);
  }, [current.src]);

  const goToTrack = useCallback((newIndex: number) => {
    setIndex(newIndex);
    setCurrentTime(0);
    setDuration(0);
    setShouldAutoplay(true);
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onEnded = () => goToTrack((index + 1) % tracks.length);
    audio.addEventListener('ended', onEnded);
    return () => audio.removeEventListener('ended', onEnded);
  }, [current.src, index, tracks.length, goToTrack]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !shouldAutoplay) return;

    const onCanPlay = () => {
      audio.play().catch((e) => console.warn('play failed', e));
      setShouldAutoplay(false);
    };

    audio.addEventListener('canplay', onCanPlay, { once: true });
    return () => audio.removeEventListener('canplay', onCanPlay);
  }, [current.src, shouldAutoplay]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.volume = volume;
  }, [current.src, volume]);

  return (
    <div className="bg-bg-secondary border-border-main mt-8 flex w-full flex-wrap justify-center rounded-md border p-6">
      <div className='flex gap-2'>
        <button onClick={() => goToTrack((index - 1 + tracks.length) % tracks.length)}>⏮</button>
        <button onClick={() => goToTrack((index + 1) % tracks.length)}>⏭</button>
      </div>

      <audio key={current.src} src={current.src} ref={audioRef} preload="metadata"></audio>
      <span>{current.title}</span>
      <button
        onClick={() => {
          const audio = audioRef.current;
          if (!audio) return;
          if (audio.paused) {
            audio.play().catch((e) => console.warn('play failed', e));
          } else {
            audio.pause();
          }
        }}
      >
        {isPlaying ? '⏸' : '▶️'}
      </button>
      <input
        type="range"
        min={0}
        max={duration || 0}
        step={0.1}
        value={currentTime}
        onChange={(e) => {
          const t = Number(e.target.value);
          audioRef.current!.currentTime = t;
          setCurrentTime(t);
        }}
      />
      <span>
        {formatTime(currentTime)} / {formatTime(duration)}
      </span>
      <input
        type="range"
        min={0}
        max={1}
        step={0.01}
        value={volume}
        onChange={(e) => {
          const v = Number(e.target.value);
          audioRef.current!.volume = v;
          setVolume(v);
        }}
      />
    </div>
  );
};

export default AudioPlayer;
