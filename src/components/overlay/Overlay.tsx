import type { ReactNode } from "react";
import { useEffect } from "react";

interface IOverlayProps {
  children?: ReactNode;
  isMenuOpen: boolean;
  toggleMenu: () => void;
}



const Overlay = ({children, isMenuOpen, toggleMenu}: IOverlayProps) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMenuOpen) {
        toggleMenu();
      }
    };

    if (isMenuOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen, toggleMenu]);

  return (
    <div onClick={toggleMenu} className={`fixed inset-0 bg-black/60 z-20 ${isMenuOpen === false ? 'hidden' : 'block'}`}>
      {children}
    </div>
  )
}

export default Overlay