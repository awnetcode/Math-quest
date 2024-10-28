import { useState, useEffect } from "react";

import Draft from "./Draft";
import ButtonsPanel from "./ButtonsPanel";
import Message from "./Message";

// eslint-disable-next-line react/prop-types
const Binary = ({scoreProp, setScoreProp}) =>{
    const [binaryString, setBinaryString] = useState('');
    const [draftValue, setDraftValue] = useState('');
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');

    function binaryLenght(){
        return Math.floor(Math.random()*7)+1
    }

 //funkcja do losowania liczby binarnej   

 function binaryValue() {
    const lenght = binaryLenght(); // Ustal długość ciągu
    let string = '';

    // Losuj 0 lub 1 tyle razy, ile wynosi długość
    for (let i = 0; i < lenght; i++) {
        string += Math.floor(Math.random() * 2); // Losuje 0 lub 1
    }
    
    setBinaryString(string); // Przechowywanie wyniku w stanie
    setDraftValue(''); //Czyszczenie brudnopisu
    setUserAnswer('');
    setMessage('');
    
}

function binaryToDecimal(e){
        // Zamień ciąg binarny na liczbę dziesiętną
        const decimalValue = parseInt(binaryString, 2);
        console.log("Decimal Value:", decimalValue); // Wyświetla wartość dziesiętną

        e.preventDefault();
        if (parseInt(userAnswer) === decimalValue) {
          setMessage('Dobrze!'); // Jeśli odpowiedź jest poprawna
          setScoreProp(scoreProp+1);
        } else {
          setMessage('Źle! Prawidłowa odpowiedź to '+ decimalValue); // Jeśli odpowiedź jest błędna
        }

        setDraftValue('');
}

  // Funkcja obsługująca zmianę w polu input
  const handleInputChange = (e) => {
    setUserAnswer(e.target.value); // Aktualizacja odpowiedzi użytkownika
  };

    useEffect(() => {
      binaryValue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);  // Pusty array dependency, aby wykonało się tylko raz po pierwszym renderze

    return(
        <>
        <h1>Zamień liczbę binarną na dziesiętną</h1>
        <div className="task-place">
            <div className="task-number">
            {binaryString}
            </div>
        </div>
        <input 
          type="number" 
          className='answer-area' 
          value={userAnswer} // Powiązanie pola input z wartością userAnswer
          onChange={handleInputChange} // Obsługa zmiany wartości input
        /> 
        <Draft draftValue={draftValue} setDraftValue={setDraftValue}/>
        <ButtonsPanel checkButton = {binaryToDecimal} nextButton = {binaryValue}/>
        <Message message={message}/>
        </>
    )
}

export default Binary;