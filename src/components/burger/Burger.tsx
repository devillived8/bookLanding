interface IBurgerProps {
  toggleMenu: () => void;
  isMenuOpen: boolean;
}

const Burger = ({ toggleMenu, isMenuOpen }: IBurgerProps) => {
  return (
    <button
      onClick={toggleMenu}
      className="relative min-h-6 min-w-10 cursor-pointer md:hidden"
      aria-label="Меню"
    >
      <span
        className={`bg-accent-red absolute left-0 h-0.5 w-full transition-all duration-300 ${
          isMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
        }`}
      />

      <span
        className={`bg-accent-red absolute top-1/2 left-0 h-0.5 w-full -translate-y-1/2 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-0' : 'opacity-100'
        }`}
      />

      <span
        className={`bg-accent-red absolute left-0 h-0.5 w-full transition-all duration-300 ${
          isMenuOpen ? 'bottom-1/2 translate-y-1/2 -rotate-45' : 'bottom-0'
        }`}
      />
    </button>
  );
};

export default Burger;
