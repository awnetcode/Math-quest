import '../styles/multiplyFractions.css';
import { useState, useEffect } from 'react';

import MixedFraction from './DrawFraction';
import Draft from './Draft';
import ButtonsPanel from './ButtonsPanel';
import Message from './Message';

// eslint-disable-next-line react/prop-types
const MultiplyFractions = ({scoreProp, setScoreProp}) =>{

    const [fraction1, setFraction1] = useState(new MixedFraction());
    const [fraction2, setFraction2] = useState(new MixedFraction());
    const [result, setResult] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');
    const [draftValue, setDraftValue] = useState('');

    // Funkcja do tworzenia nowych ułamków
    function createFraction() {
        const newFraction1 = new MixedFraction();
        const newFraction2 = new MixedFraction();
        const product = (newFraction1.toDecimal() * newFraction2.toDecimal()).toFixed(2);

        //aktualizacja stanów zmiennych stanowych
        setFraction1(newFraction1);
        setFraction2(newFraction2);
        setResult(parseFloat(product));
        setMessage('');
    }

    useEffect(() => {
        createFraction();
    }, []);

    const handleInputChange = (e) => {
        setUserAnswer(e.target.value);
    };

    const handleSubmit = (e) => {
        if (e) e.preventDefault();
        if (parseFloat(userAnswer) === result) {
            setMessage('Dobrze!');
            setScoreProp(scoreProp+4);
        } else {
            setMessage(`Źle! Prawidłowa odpowiedź to ${result}`);
        }
        setUserAnswer('');
    };

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Enter') {
                handleSubmit();
            }

            if (e.key === ' '){
              createFraction();
            }
        };
        
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAnswer, result]);

    return (
        <>
            <h1>Pomnóż ułamki i podaj wynik w liczbie dziesietnej</h1>
            <div className="task-place">
                <div className="fraction-place">
                    <div className="int-part">{fraction1.intPart}</div>
                    <div className="fraction-part">
                        <div className="numerator">{fraction1.numerator}</div>
                        <div className="fraction-bar"></div>
                        <div className="denominator">{fraction1.denominator}</div>
                    </div>
                </div>
                <div className="addition-sign">&middot;</div>  
                <div className="fraction-place">
                    <div className="int-part">{fraction2.intPart}</div>
                    <div className="fraction-part">
                        <div className="numerator">{fraction2.numerator}</div>
                        <div className="fraction-bar"></div>
                        <div className="denominator">{fraction2.denominator}</div>
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
            <ButtonsPanel checkButton = {handleSubmit} nextButton = {createFraction}/>
            <Message message={message}/>
        </>
    );

}

export default MultiplyFractions;