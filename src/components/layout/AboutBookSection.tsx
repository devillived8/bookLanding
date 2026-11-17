import yan from '../../assets/img/yan.png';
import nika from '../../assets/img/nika.png';

const AboutBookSection = () => {
  return (
    <section className="border-border-main m-4 flex flex-col gap-4 border bg-black/60 p-4">
      <h2 className="font-display text-center text-lg">О книге</h2>
      <div className="flex p-4">
        <img src={yan} alt="Персонаж Ян" className="h-80" />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex quod modi explicabo eveniet
          repellat ut cum molestiae repellendus vel reiciendis. Blanditiis, eum. Deleniti reiciendis
          odit atque sed doloribus, qui, at illo tempore autem, laudantium quia nesciunt? Alias
          cupiditate aut doloremque?
        </p>
      </div>
      <div className="flex p-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui assumenda voluptatibus nemo
          explicabo ea, laboriosam quisquam quod doloribus corporis cumque distinctio sed expedita
          soluta et quas! Quis exercitationem nihil architecto at id aliquam iure sunt aut
          distinctio voluptatibus, aliquid vel!
        </p>
        <img src={nika} alt="Персонаж Ника" className="h-80" />
      </div>
      <div className="relative flex h-80 justify-center">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/zCQkyFwZLLU?si=48X3jxQgXrEbJ46H"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default AboutBookSection;
