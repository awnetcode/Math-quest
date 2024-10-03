import { useState, useEffect } from 'react';
import '../styles/round.css';

const Round = () => {
  // Stany przechowujące wylosowane wartości
  const [number, setNumber] = useState(0);
  const [factor, setFactor] = useState(0);
  const [rounded, setRounded] = useState(0);
  const [userAnswer, setUserAnswer] = useState(''); // Stan przechowujący odpowiedź użytkownika
  const [message, setMessage] = useState(''); // Stan przechowujący wiadomość po sprawdzeniu odpowiedzi

  function getRoundingFactor() {
    // Losowanie potęgi liczby 10 od 0 do 3
    const exponent = Math.floor(Math.random() * 4);
    return Math.pow(10, exponent); // Zwraca 10^0, 10^1, 10^2 lub 10^3
  }

  function getRandomNumber(min) {
    // Losowanie liczby od minimalnej wartości do 9999
    return Math.floor(Math.random() * (9999 - min + 1)) + min;
  }

  function roundNumber() {
    const factor = getRoundingFactor();
    const number = getRandomNumber(factor);  // Losuj liczbę od wartości `factor` w górę
    const rounded = Math.round(number / factor) * factor;

    // Aktualizacja stanów
    setFactor(factor);
    setNumber(number);
    setRounded(rounded);
  }

  // useEffect, aby wywołać roundNumber tylko raz, przy pierwszym renderowaniu komponentu
  useEffect(() => {
    roundNumber();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Funkcja obsługująca zmianę w polu input
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value); // Aktualizacja odpowiedzi użytkownika
  };

  // Funkcja obsługująca wysłanie formularza i porównanie odpowiedzi
  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userAnswer) === rounded) {
      setMessage('Dobrze!'); // Jeśli odpowiedź jest poprawna
    } else {
      setMessage('Źle! Prawidłowa odpowiedź to '+rounded); // Jeśli odpowiedź jest błędna
    }
  };

  return (
    <>
      <h1 className="quest-title">
        Zaokrągl liczbę 
        <span className="quest-data"> {number}</span> do 
        <span className="quest-data"> {factor}</span>:
      </h1>
      <form action="#" className="quest-round" onSubmit={handleSubmit}>  
        <input 
          type="number" 
          className='answer-area' 
          value={userAnswer} // Powiązanie pola input z wartością userAnswer
          onChange={handleInputChange} // Obsługa zmiany wartości input
        /> 
        <button type="submit">Sprawdź</button> 
      </form> 
      {userAnswer && <p>{message}</p>} {/* Wyświetlanie wiadomości, jeśli istnieje */}
    </>
  );
};

export default Round;
