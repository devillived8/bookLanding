import Burger from "../burger/Burger";


interface IHeaderProps {
  openMenu: () => void;
  isMenuOpen: boolean;
}

const Header = ({openMenu, isMenuOpen}: IHeaderProps) => {
  return (
    <header className="sticky top-0 bg-black/90 p-4 border-b border-slate-900 flex justify-between items-center">
        <a href=""><img src="" alt="тут будет логотип" /></a>
        <Burger isMenuOpen={isMenuOpen} openMenu={openMenu}></Burger>
    </header>
  )
}

export default Header