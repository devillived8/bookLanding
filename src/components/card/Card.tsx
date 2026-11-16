import { NavLink } from 'react-router-dom';
import arrowIcon from '../../assets/img/arrow-icon.svg?react';


interface ICardProps {
  name: string;
  role: string;
  description: string;
  imgName: string;
}

export const Card = ({ name, role, description, imgName }: ICardProps) => {
  const ArrowIcon = arrowIcon;
  return (
    <article className="flex w-full max-w-75 gap-4 rounded-md bg-black/30 p-3 md:flex-col">
  <div className="h-48 w-36 shrink-0 md:h-64 md:w-full">
    <img
      className="h-full w-full rounded-md object-cover object-top"
      src={imgName}
      alt={name}
    />
  </div>

  <div className="flex min-w-0 flex-1 items-center justify-between gap-2">
    <div className="min-w-0">
      <p className="text-lg text-white">{name}</p>
      <p className="text-accent-red">{role}</p>
      <p className="line-clamp-2">{description}</p>
    </div>

    <NavLink
      className="shrink-0 self-center text-accent-red"
      to="/characters"
      title="Узнать больше"
    >
      <ArrowIcon className="h-6 w-6" />
    </NavLink>
  </div>
</article>
  );
};
