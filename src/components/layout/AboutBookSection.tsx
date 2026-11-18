import yan from '../../assets/img/yan.png';
import nika from '../../assets/img/nika.png';

const AboutBookSection = () => {
  return (
    <section className=" m-4 flex flex-col gap-4 p-4 ">
      <h2 className="font-display text-center text-lg mb-4">О книге</h2>

      <div className="sm:flow-root-none flow-root max-w-220 p-4 sm:flex sm:items-start sm:gap-4 bg-black/60 rounded-md">
        <img
          src={yan}
          alt="Персонаж Ян"
          className="float-left mr-4 mb-2 h-48 w-auto object-contain sm:float-none sm:mr-0 sm:mb-0 sm:h-80"
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod modi explicabo eveniet
          repellat ut cum molestiae repellendus vel reiciendis. Blanditiis, eum. Deleniti reiciendis
          odit atque sed doloribus, qui, at illo tempore autem, laudantium quia nesciunt? Alias
          cupiditate aut doloremque?
        </p>
      </div>

      <div className="flow-root max-w-220 p-4 sm:flex sm:items-start sm:gap-4  self-end bg-black/60 rounded-md">
        <img
          src={nika}
          alt="Персонаж Ника"
          className="float-right mb-2 ml-4 h-48 w-auto object-contain sm:order-2 sm:float-none sm:mb-0 sm:ml-0 sm:h-80"
        />
        <p className="sm:order-1">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui assumenda voluptatibus nemo
          explicabo ea, laboriosam quisquam quod doloribus corporis cumque distinctio sed expedita
          soluta et quas! Quis exercitationem nihil architecto at id aliquam iure sunt aut
          distinctio voluptatibus, aliquid vel!
        </p>
      </div>

      {/* <div className="relative mt-4 flex justify-center">
        <div className="aspect-video w-full max-w-[560px]">
          <iframe
            src="https://www.youtube.com/embed/zCQkyFwZLLU?si=48X3jxQgXrEbJ46H"
            title="YouTube video player"
            className="h-full w-full rounded-md"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}
    </section>
  );
};

export default AboutBookSection;
