import { useState } from 'react';
import Header from '../layout/Header';
import Hero from '../hero/Hero';
import MobileMenu from '../layout/MobileMenu';
import Overlay from '../overlay/Overlay';
import InfoSection from '../layout/InfoSection';
import AboutBookSection from '../layout/AboutBookSection';
import Characters from '../layout/Characters';

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <MobileMenu isMenuOpen={menuIsOpen}></MobileMenu>
      <Header toggleMenu={handleToggleMenu} isMenuOpen={menuIsOpen} />
      <Overlay isMenuOpen={menuIsOpen} toggleMenu={handleToggleMenu}></Overlay>
      {/* <div className="pointer-events-none absolute inset-0 bg-black/50" /> */}


      <main className='relative z-10'>
        <Hero />
        <InfoSection></InfoSection>
        <AboutBookSection></AboutBookSection>
        <Characters></Characters>
      </main>
    </>
  );
};

export default App;
