import { useState } from 'react'
import Header from '../layout/Header'
import Hero from '../hero/Hero';

const App = () => {
    const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

    const handleToggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    };


  return (
    <div>
    <Header openMenu={handleToggleMenu} isMenuOpen={menuIsOpen}/>
    <main>
        <Hero/>
    </main>
    </div>
  )
}

export default App