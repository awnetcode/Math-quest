import '../styles/changeFraction.css';
import { useState, useEffect } from 'react';
import MixedFraction from './DrawFraction';
import Draft from './Draft';
import ButtonsPanel from './ButtonsPanel';
import Message from './Message';

// eslint-disable-next-line react/prop-types
const ChangeFraction = ({scoreProp, setScoreProp}) => {

    const [fraction, setFraction] = useState(new MixedFraction())
    const [result, setResult] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');
    const [draftValue, setDraftValue] = useState('');

    function createFraction() {

        const drawnFraction = new MixedFraction();
        const decimal = drawnFraction.toDecimal().toFixed(3);

        setFraction(drawnFraction);
        setResult(parseFloat(decimal));
        setDraftValue('');
        setUserAnswer('');
        setMessage('');
    }

    //console.log(result);
    //console.log(userAnswer);

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
            setScoreProp(scoreProp+2);
        } else {
            setMessage(`Źle! Prawidłowa odpowiedź to ${result}`);
        }
        setUserAnswer('');
        setDraftValue('');
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
        
        // Dodanie nasłuchiwania klawisza Enter
        window.addEventListener('keydown', handleKeyDown);

        // Usuwanie nasłuchiwacza przy unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userAnswer, result]);

    return (
        <>
            <h1>Zamień ułamek zwykły na dziesiętny</h1>
            <div className="task-place">
            <div className="fraction-place">
                <div className="int-part">{fraction.intPart}</div>
                <div className="fraction-part">
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
             <Draft draftValue={draftValue} setDraftValue={setDraftValue} /> 
             <ButtonsPanel checkButton = {handleSubmit} nextButton = {createFraction}/> 
             <Message message={message}/>
        </>
    );
};

export default ChangeFraction;
