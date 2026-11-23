import Burger from '../burger/Burger';
import logo from '../../assets/img/logo.png'

interface IHeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header = ({ toggleMenu, isMenuOpen }: IHeaderProps) => {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between border-b border-border-main bg-black p-4">
      <a href="/">
        <img src={logo} alt="тут будет логотип" className="h-8 " />
      </a>
      <nav className="hidden md:block">
        <ul className="flex divide-x divide-text-muted">
          <li>
            <a className="hover:text-accent-red block px-4 transition-colors" href="#AboutBook">
              О книге
            </a>
          </li>
          <li>
            <a className="hover:text-accent-red block px-4 transition-colors" href="#AboutAuthor">
              Об авторе
            </a>
          </li>
          <li>
            <a className="hover:text-accent-red block px-4 transition-colors" href="#Characters">
              Персонажи
            </a>
          </li>
          <li>
            <a className="hover:text-accent-red block px-4 transition-colors" href="">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Burger>
    </header>
  );
};

export default Header;
