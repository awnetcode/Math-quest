
import '../styles/changeFraction.css'
import { useState, useEffect } from 'react';

const ChangeFraction = () => {
    //stany przehowujące część całkowitą ułamka, licznik i mianownik.
    const [intPart, setIntPart] = useState(0);
    const [numerator, setNumerator] = useState(0);
    const [denominator, setDenominator] = useState(0);
    const [result, setResult] = useState(0);

    function createFraction(){
        //losowanie poszczególnych składników liczby mieszanej !==0
       const int = Math.floor(Math.random()*10)+1;
       const num = Math.floor(Math.random()*10)+1;
       const denom = Math.floor(Math.random()*10)+1;

       const decimal = ((int*num)/denom).toFixed(4); //w nawiasie bo toFixed zwraca stringa
       
       //aktualizacja stanów
       setIntPart(int);
       setNumerator(num);
       setDenominator(denom);
       setResult(parseFloat(decimal));  
    }

  // Wywołanie losowania przy pierwszym renderze komponentu (zapobiega rederowaniu w nieskończonośc)
  useEffect(() => {
    createFraction();
  }, []);


  return (
    <>
    <h1>Zamień ułamek zwykły na dziesiętny</h1>
    <div className="fraction-place">
        <div className="int-part">{intPart}</div>
        <div className="fraction-part">
            <div className="numerator">{numerator}</div>
            <div className="fraction-bar"></div>
            <div className="denominator">{denominator}</div>
        </div>
    </div>
    {/* <input 
          type="number" 
          className='answer-area' 
          value={12} // Powiązanie pola input z wartością userAnswer
          onChange={createFraction} // Obsługa zmiany wartości input
        />  */}
    <div className="buttons-panel">
        <button className='task-button' >Sprawdź</button> 
        <button className='task-button' onClick={createFraction}>NEXT</button>
        </div>
     zapis dziesiętny to: {result}
    </>
  );
};

export default ChangeFraction;
