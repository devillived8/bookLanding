import Burger from '../burger/Burger';
import logo from '../../assets/img/logo.webp';
import { navItems } from '../../config/navigation';

interface IHeaderProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Header = ({ toggleMenu, isMenuOpen }: IHeaderProps) => {
  return (
    <header className="border-border-main sticky top-0 z-20 flex items-center justify-between border-b bg-black p-4">
      <a href="/">
        <img src={logo} alt="тут будет логотип" className="h-8" />
      </a>
      <nav className="hidden md:block">
        <ul className="divide-text-muted flex divide-x">
          {navItems.map((item) => (
            <li>
              <a href={item.href} className="hover:text-accent-red block px-4 transition-colors">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <Burger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu}></Burger>
    </header>
  );
};

export default Header;
