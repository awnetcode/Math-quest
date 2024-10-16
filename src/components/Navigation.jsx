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
        <div className={`hamburger-icon ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
        <div className="hamburger-menu">
      {/* Przyciski Hamburger */}


      {/* Menu */}
      <nav className={`menu ${isOpen ? "open" : ""}`}>
        <ul className="navbar-list">
          <li className="navbar-link" onClick={()=>setActiveProp('round')}>Zaokrąglanie</li>
          <li className="navbar-link" onClick={()=>setActiveProp('change')}>Zamiana ułamków</li>
          <li className="navbar-link" onClick={()=>setActiveProp('add')}>Dodawanie ułamków</li>
          <li className="navbar-link" onClick={()=>setActiveProp('')}>Mnożenie ułamków</li>
          <li className="navbar-link" onClick={()=>setActiveProp('')}>Zamiana na binarne</li>
          <li className="navbar-link" onClick={()=>setActiveProp('')}>Zamiana na szesnastkowe</li>
        </ul>
      </nav>
    </div>
        </div>
    </>
  );
};

export default Navigation;
