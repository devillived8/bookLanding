import BookLogo from '../../assets/img/book-logo.webp';
import { navItems } from '../../config/navigation';

interface IMobileMenuProps {
  isMenuOpen: boolean;
  setMenuIsOpen: () => void;
}

const MobileMenu = ({ isMenuOpen, setMenuIsOpen }: IMobileMenuProps) => {
  return (
    <aside
      onClick={(e) => e.stopPropagation()}
      className={`border-border-main fixed z-30 flex h-full flex-col items-center gap-8 border-r bg-black pr-6 pl-6 transition-transform duration-200 ${isMenuOpen === false ? '-translate-x-full' : 'translate-0'} `}
    >
      <div className="">
        <img src={BookLogo} alt="Картинка книги" className="h-16" />
      </div>
      <nav className="" id="mobile-menu">
        <ul className="flex flex-col gap-4">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="hover:text-accent-red block px-4 transition-colors"
                onClick={setMenuIsOpen}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default MobileMenu;
