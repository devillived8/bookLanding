import Crow from '../../assets/img/img-crow.png';

const InfoSection = () => {
  return (
    <section className="relative z-9 mt-4 flex flex-col gap-4 px-4 lg:flex-row">
      <div className="bg-black/60 flex-1 rounded-md border border-border-main">
        <h2 className="text-center py-4 text-lg font-display">Об книге</h2>
        <div className="flex flex-col items-center gap-4 p-4 sm:flex-row sm:items-start">
          <img
            src={Crow}
            alt="Ворона"
            className="w-50 max-w-full shrink-0 object-cover sm:w-48 md:w-60"
          />
          <p className="min-w-0 flex-1 text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit expedita
            vero est exercitationem architecto a explicabo vitae delectus accusantium? lorem50
          </p>
        </div>
      </div>

      <div className="bg-black/60 flex-1 rounded-md border border-border-main">
        <h2 className="text-center py-4 text-lg font-display">Об авторе</h2>
        <div className="flex flex-col items-center gap-4 p-4 sm:flex-row sm:items-start">
          <img
            src={Crow}
            alt="Ворона"
            className="w-50 max-w-full shrink-0 object-cover sm:w-48 md:w-60"
          />
          <p className="min-w-0 flex-1 text-center sm:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non reprehenderit expedita
            vero est exercitationem architecto a explicabo vitae delectus accusantium?
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfoSection;