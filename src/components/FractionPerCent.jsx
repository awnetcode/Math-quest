import { useEffect, useState } from "react";

import Draft from "./Draft"
import ButtonsPanel from "./ButtonsPanel"
import Message from "./Message"

class Fraction {
    constructor(numerator, denominator){
        this.numerator = numerator || this.drawNumber();
        this.denominator = denominator || this.drawNumber();
    }

    drawNumber() {
        return Math.floor(Math.random() * 100) + 1;
    }

    fractionToPerCent(){
       return Math.round((this.numerator / this.denominator) * 100);
    }
}

// eslint-disable-next-line react/prop-types
const FractionPerCent = ({scoreProp, setScoreProp}) =>{

const [fraction, setFraction] = useState(new Fraction())
const [result, setResult] = useState(0);
const [userAnswer, setUserAnswer] = useState('');
const [message, setMessage] = useState('');
const [draftValue, setDraftValue] = useState('');    

    const createTask = () =>{
        const task = new Fraction();
        const percent = task.fractionToPerCent();
        setFraction(task);
        setResult(percent);
    }

    useEffect(()=>{
        createTask()
    }, []);


    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

   const checkAnswer = (e) => {
    if (e) e.preventDefault();
    if (parseFloat(userAnswer) === result) {
        setMessage('Dobrze!');  
        setScoreProp(scoreProp+4);
    } else {
        setMessage(`Źle! Prawidłowa odpowiedź to ${result}`);
    }
    setUserAnswer('');
};
    return(
        <>
            <h1>Zamień ułamek na procent</h1>
            <div className="task-place">
                <div className="fraction-place">
                    <div className="task-number">
                        <div className="numerator">{fraction.numerator}</div>
                        <div className="fraction-bar"></div>
                        <div className="denominator">{fraction.denominator}</div>
                    </div>
                </div>
            </div>
            <input 
                type="number" 
                className='answer-area' 
                value={userAnswer} 
                onChange={handleInputChange} 
            /> 
        <Draft draftValue={draftValue} setDraftValue={setDraftValue}/>
        <ButtonsPanel checkButton = {checkAnswer} nextButton = {createTask}/>
        <Message message={message}/> 
        </>
    )
}

export default FractionPerCent