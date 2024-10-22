import { useState, useEffect } from "react";

import Draft from "./Draft";
import ButtonsPanel from "./ButtonsPanel";
//import { array } from "prop-types";

const Binary = () =>{
    const [loopCounter, setLoopCounter] = useState('');
    const [binaryString, setBinaryString] = useState('');
   const [draftValue, setDraftValue] = useState('');

    function binaryLenght(){
        return Math.floor(Math.random()*7)+1
    }

 //funkcja do losowania liczby binarnej   

 function binaryValue() {
    const lenght = binaryLenght(); // Ustal długość ciągu
    let string = '';

    // Losuj 0 lub 1 tyle razy, ile wynosi długość
    for (let i = 0; i < loopCounter; i++) {
        string += Math.floor(Math.random() * 2); // Losuje 0 lub 1
    }
    console.log(string);
    setLoopCounter(lenght); // Aktualizacja długości w stanie
    setBinaryString(string); // Przechowywanie wyniku w stanie
}

function binaryToDecimal(){
        // Zamień ciąg binarny na liczbę dziesiętną
        const decimalValue = parseInt(binaryString, 2);
        console.log(binaryString);
        console.log("Decimal Value:", decimalValue); // Wyświetla wartość dziesiętną
}

    useEffect(() => {
       const lenght = binaryLenght(); //generuje losową wartość
       setLoopCounter(lenght); //ustawienie jej jako stan
    }, []);  // Pusty array dependency, aby wykonało się tylko raz po pierwszym renderze

    return(
        <>
        <h1>Zamień liczbę binarną na dziesiętną</h1>
        <div className="task-place">
            <div className="fraction-place">
            {binaryString}
            </div>
        </div>
        <Draft draftValue={draftValue} setDraftValue={setDraftValue}/>
        <ButtonsPanel checkButton = {binaryToDecimal} nextButton = {binaryValue}/>
        </>
    )
}

export default Binary;