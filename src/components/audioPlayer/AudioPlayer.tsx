import { useState } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

interface ITrackProps {
  id: number;
  src: string;
  title: string;
}

interface IAudioPlayerProps {
  tracks: ITrackProps[];
}

const MyAudioPlayer = ({ tracks }: IAudioPlayerProps) => {
  const [index, setIndex] = useState(0);
  const currentTrack = tracks[index];

  const handlePrevious = () => {
    setIndex((prev) => (prev === 0 ? tracks.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIndex((prev) => (prev < tracks.length - 1 ? prev + 1 : 0));
  };

  return (
    <div className=" flex w-full flex-col items-center p-2">
      <AudioPlayer
      className='max-w-200 rounded-md border border-border-component bg-bg-secondary! text-'
        src={currentTrack.src}
        showSkipControls={true}
        showJumpControls={false}
        onClickPrevious={handlePrevious}
        onClickNext={handleNext}
        onEnded={handleNext}
        header={`Сейчас играет: ${currentTrack.title}`}
        customIcons={{
          previous: <span className=''>⏮</span>,
          next: <span>⏭</span>,
        }}
      />
    </div>
  );
};

export default MyAudioPlayer;