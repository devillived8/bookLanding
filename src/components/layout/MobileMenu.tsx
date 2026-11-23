import BookLogo from '../../assets/img/book-logo.png'

interface IMobileMenuProps {
    isMenuOpen: boolean;
}

const MobileMenu = ({isMenuOpen}: IMobileMenuProps) => {
  return (
    <aside onClick={(e) => e.stopPropagation()} className={`fixed z-30 flex flex-col h-full gap-8 pr-6 pl-6 items-center bg-black border-r border-border-main transition-transform duration-200 ${isMenuOpen === false ? '-translate-x-full' : 'translate-0'} `}>
        <div className=''><img src={BookLogo} alt="Картинка книги" className='h-16'/></div>
        <nav className=''>
          <ul className="flex flex-col gap-4">
          <li>
            <a className="hover:text-accent-red block transition-colors" href="#AboutBook">
              О книге
            </a>
          </li>
          <li>
            <a className="hover:text-accent-red block transition-colors" href="#AboutAuthor">
              Об авторе
            </a>
          </li>
          <li>
            <a className="hover:text-accent-red block transition-colors" href="#Characters">
              Персонажи
            </a>
          </li>
          <li>
            <a className="hover:text-accent-red block transition-colors" href="">
              Контакты
            </a>
          </li>
        </ul>
        </nav>
    </aside>
  )
}

export default MobileMenu