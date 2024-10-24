import { useState, useEffect } from 'react';
import '../styles/round.css';
import ButtonsPanel from './ButtonsPanel';
import Message from './Message';

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
    setUserAnswer('');
  }

  // useEffect, aby wywołać roundNumber tylko raz, przy pierwszym renderowaniu komponentu
  useEffect(() => {
    roundNumber();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }

        if (e.key === ' '){
          roundNumber();
        }
    };
    
    // Dodanie nasłuchiwania klawisza Enter
    window.addEventListener('keydown', handleKeyDown);

    // Usuwanie nasłuchiwacza przy unmount
    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    };
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [userAnswer, rounded]);

  // Funkcja obsługująca zmianę w polu input
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value); // Aktualizacja odpowiedzi użytkownika
  };

  // Funkcja obsługująca wysłanie formularza i porównanie odpowiedzi
  const handleSubmit = (e) => {
    if (e) e.preventDefault();
  // Sprawdzenie, czy userAnswer nie jest pusty
  if (userAnswer !== '') {
    // Sprawdzenie, czy odpowiedź użytkownika jest poprawna
    if (parseInt(userAnswer) === rounded) {
      setMessage('Dobrze!'); // Jeśli odpowiedź jest poprawna
    } else {
      setMessage('Źle! Prawidłowa odpowiedź to ' + rounded); // Jeśli odpowiedź jest błędna
    }
  } else {
    setMessage(''); // Jeśli pole jest puste
  }
  setUserAnswer('');
  };

  // Funkcja obsługująca kliknięcie "next" - losuje nową liczbę
  const handleNext = () => {
    setMessage(''); // Wyczyść wiadomość tylko przy losowaniu nowego zadania
    roundNumber();  // Losowanie nowego zadania
  };

  return (
    <>
      <h1 className="quest-title">Zaokrągl liczbę: </h1>
      <div className="task-place">
        <div className="task-number">{number} do {factor}</div> 
      </div>
      <form action="#" className="quest-round" onSubmit={handleSubmit}>  
        <input 
          type="number" 
          className='answer-area' 
          value={userAnswer} // Powiązanie pola input z wartością userAnswer
          onChange={handleInputChange} // Obsługa zmiany wartości input
        /> 
        <ButtonsPanel checkButton={handleSubmit} nextButton={handleNext} />
      </form> 
      <Message message={message} /> {/* Wyświetlanie wiadomości, jeśli istnieje */}
    </>
  );
};

export default Round;

