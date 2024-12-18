import { useState } from "react";
import '../styles/navigation.css'
// Załaduj osobny plik CSS

// eslint-disable-next-line react/prop-types
const Navigation = ({setActiveProp}) => {
  // Stan do kontrolowania otwierania i zamykania menu
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja przełączająca stan menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <div className="navbar">
          {/* Przyciski Hamburger */}
        <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
        <div className="hamburger-menu">

      {/* Menu */}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-link" onClick={()=>setActiveProp('round')}>Zaokrąglanie</li>
          <li className="navbar-link" onClick={()=>setActiveProp('change')}>Zamiana ułamków</li>
          <li className="navbar-link" onClick={()=>setActiveProp('add')}>Dodawanie ułamków</li>
          <li className="navbar-link" onClick={()=>setActiveProp('multiply')}>Mnożenie ułamków</li>
          <li className="navbar-link" onClick={()=>setActiveProp('fractionPerCent')}>Ułamek na procent</li>
          <li className="navbar-link" onClick={()=>setActiveProp('bin')}>Konwersja binarna</li>
          <li className="navbar-link" onClick={()=>setActiveProp('hex')}>Konwersja szesnastkowa</li>
        </ul>
      </nav>
    </div>
        </div>
    </>
  );
};

export default Navigation;
