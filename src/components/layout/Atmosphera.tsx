import AudioPlayer from '../audioPlayer/AudioPlayer';
import Section from '../section/Section';
import ReelsSlider, { type IReelItem } from '../slider/ReelsSlider';

const tracks = [
  { id: 1, src: '/tracks/samoypravlenit.mp3', title: 'трек 1' },
  { id: 2, src: '/tracks/plana-net.mp3', title: 'трек 2' },
];

const reels: IReelItem[] = [
  {
    id: 'reel-1',
    src: 'https://vk.ru/clip_ext.php?oid=438748581&id=456241227',
    title: 'Видеоклип вконтакте',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto, optio sint eos nesciunt illo hic quo illum recusandae possimus.',
  },
  {
    id: 'reel-2',
    src: 'https://vk.ru/clip_ext.php?oid=438748581&id=456241201',
    title: 'Видеоклип вконтакте',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur earum esse obcaecati tempore totam quia accusantium quis, maxime ea.',
  },
];


const ReelCard = ({ item }: { item: IReelItem }) => (
  <div className="bg-bg-surface border-border-component flex h-full flex-col items-center gap-4 rounded-md border p-4">
    <iframe
      className="aspect-[363/714] w-full max-w-[363px] rounded-md border-0"
      src={item.src}
      allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
      allowFullScreen
      loading="lazy"
      title={item.title ?? 'Видеоклип вконтакте'}
    />
    {item.text && <p className="hyphens-auto text-center">{item.text}</p>}
  </div>
);

const Atmosphera = () => {
  return (
    <Section titleText="Атмосфера" id="Atmosphera">
      <div className="flex flex-col items-center">
        <div className='mb-4 md:mb-8'>
          <p className='hyphens-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque deserunt, praesentium facilis, aliquam beatae commodi fugit, blanditiis porro inventore velit soluta perspiciatis dolore eligendi? Explicabo tempore possimus non voluptas quis. Voluptatem consectetur quia culpa fugiat ducimus est eaque ex aliquam beatae, impedit quasi similique, nisi repudiandae explicabo omnis! Corporis architecto qui quasi consequuntur accusamus molestiae at numquam blanditiis quae veniam!</p>
          </div>

        <div className="w-full md:hidden">
          <ReelsSlider items={reels} />
        </div>


        <div className="hidden w-full justify-center gap-15 md:flex md:flex-wrap">
          {reels.map((item) => (
            <div key={item.id} className="max-w-90.75">
              <ReelCard item={item} />
            </div>
          ))}
        </div>

        <div className="bg-bg-surface border-border-component mt-8 flex flex-col gap-4 rounded-md border p-4 md:gap-8">
          <p className="hyphens-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            voluptatem deserunt dolor consequatur debitis ipsum quae, odio vel
            nisi ad.
          </p>
          <AudioPlayer tracks={tracks} />
        </div>
      </div>
    </Section>
  );
};

export default Atmosphera;