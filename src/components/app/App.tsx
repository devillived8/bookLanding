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
    setMenuIsOpen((prev) => !prev);
  };

  return (
    <>
      <div className="pointer-events-none fixed inset-0 z-10 bg-black/70" />
      <MobileMenu isMenuOpen={menuIsOpen} setMenuIsOpen={handleToggleMenu}></MobileMenu>
      <Header toggleMenu={handleToggleMenu} isMenuOpen={menuIsOpen} />
      <Overlay isMenuOpen={menuIsOpen} toggleMenu={handleToggleMenu}></Overlay>

      <main className="relative z-10">
        <Hero />
        <div className='max-w-320 mx-auto bg-black/70 pt-4 pb-4 mt-4 rounded-md'>
        <InfoSection></InfoSection>
        <AboutBookSection></AboutBookSection>
        <WhereFind></WhereFind>
        <Characters></Characters>
        <Atmosphera></Atmosphera>
        <AboutAuthor></AboutAuthor>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
};

export default App;
