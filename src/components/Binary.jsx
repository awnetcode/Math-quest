import { useState, useEffect } from "react";

import Draft from "./Draft";

const Binary = () =>{
    const [loopCounter, setLoopCounter] = useState('');
   // const [binaryString, setBinaryString] = useState('');
   const [draftValue, setDraftValue] = useState('');

    function binaryLenght(){
        return Math.floor(Math.random()*7)+1
    }

 //funkcja do losowania liczby binarnej   
/*
    function binaryValue(){
        return Math.floor(Math.random());
    }
*/


    useEffect(() => {
       const lenght = binaryLenght(); //generuje losową wartość
       setLoopCounter(lenght); //ustawienie jej jako stan
    }, []);  // Pusty array dependency, aby wykonało się tylko raz po pierwszym renderze

    return(
        <>
        <h1>Zamień liczbę binarną na dziesiętną</h1>
        <div className="task-place">
            <div className="fraction-place">
            {loopCounter}
            </div>
        </div>
        <Draft draftValue={draftValue} setDraftValue={setDraftValue}/>
        </>
    )
}

export default Binary;