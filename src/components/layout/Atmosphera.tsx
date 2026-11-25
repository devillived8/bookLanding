import AudioPlayer from '../audioPlayer/AudioPlayer';
import Section from '../section/Section';

  const tracks = [
    { id: 1, src: '/tracks/samoypravlenit.mp3', title: 'трек 1' },
    { id: 2, src: '/tracks/plana-net.mp3', title: 'трек 2' },
  ];

const Atmosphera = () => {


  return (
    <Section titleText="Атмосфера" id='Atmosphera'>
      <div className="flex flex-col items-center">
        
        <div className="flex flex-wrap w-full justify-center gap-15">
          <div className="flex flex-col max-w-90.75 items-center justify-center p-4 gap-4 bg-bg-surface border-border-component border rounded-md">
            <iframe
              className="aspect-[363/714] h-auto w-full max-w-[363px] rounded-md"
              src="https://vk.ru/clip_ext.php?oid=438748581&id=456241227"
              width="363"
              height="714"
              allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              frameBorder="0"
              allowFullScreen
              loading='lazy'
              title='Видеоклип вконтакте'
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad architecto, optio sint
              eos nesciunt illo hic quo illum recusandae possimus.
            </p>
          </div>
          <div className=" flex flex-col max-w-90.75 items-center justify-center p-4 gap-4 bg-bg-surface border-border-component border rounded-md">
            <iframe
              className="aspect-[363/714] h-auto w-full max-w-[363px] rounded-md"
              src="https://vk.ru/clip_ext.php?oid=438748581&id=456241201"
              width="363"
              height="714"
              allow="encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
              frameBorder="0"
              allowFullScreen
              loading='lazy'
              title='Видеоклип вконтакте'
            ></iframe>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt tenetur earum esse
              obcaecati tempore totam quia accusantium quis, maxime ea.
            </p>
          </div>
        </div>


        <div className='mt-8 bg-bg-surface border-border-component border rounded-md p-4'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi voluptatem deserunt dolor consequatur debitis ipsum quae, odio vel nisi ad.</p>
             <AudioPlayer tracks={tracks}></AudioPlayer>
        </div>
     

      </div>
    </Section>
  );
};

export default Atmosphera;
