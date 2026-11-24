import { useState } from 'react';
import Header from '../layout/Header';
import Hero from '../hero/Hero';
import MobileMenu from '../layout/MobileMenu';
import Overlay from '../overlay/Overlay';
import InfoSection from '../layout/InfoSection';
import AboutBookSection from '../layout/AboutBookSection';
import Characters from '../layout/Characters';
import WhereFind from '../layout/WhereFind';
import Atmosphera from '../layout/Atmosphera';
import AboutAuthor from '../layout/AboutAuthor';
import { Footer } from '../layout/Footer';

const App = () => {
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  const handleToggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-10 bg-black/50" />
      <MobileMenu isMenuOpen={menuIsOpen}></MobileMenu>
      <Header toggleMenu={handleToggleMenu} isMenuOpen={menuIsOpen} />
      <Overlay isMenuOpen={menuIsOpen} toggleMenu={handleToggleMenu}></Overlay>

      <main className="relative z-10">
        <Hero />
        <InfoSection></InfoSection>
        <AboutBookSection></AboutBookSection>
        <WhereFind></WhereFind>
        <Characters></Characters>
        <Atmosphera></Atmosphera>
        <AboutAuthor></AboutAuthor>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
