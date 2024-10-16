import '../styles/changeFraction.css';
import { useState, useEffect } from 'react';

const ChangeFraction = () => {
    const [intPart, setIntPart] = useState(0);
    const [numerator, setNumerator] = useState(0);
    const [denominator, setDenominator] = useState(0);
    const [result, setResult] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');

    function createFraction() {
        const int = Math.floor(Math.random() * 10) + 1;
        const num = Math.floor(Math.random() * 10) + 1;
        const denom = Math.floor(Math.random() * 10) + 1;
        const decimal = ((int * denom) +num)/denom.toFixed(4);

        setIntPart(int);
        setNumerator(num);
        setDenominator(denom);
        setResult(parseFloat(decimal));
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
            <div className="fraction-place">
                <div className="int-part">{intPart}</div>
                <div className="fraction-part">
                    <div className="numerator">{numerator}</div>
                    <div className="fraction-bar"></div>
                    <div className="denominator">{denominator}</div>
                </div>
            </div>
            <input 
                type="number" 
                className='answer-area' 
                value={userAnswer} 
                onChange={handleInputChange} 
            /> 
            <div className="buttons-panel">
                <button className='task-button' onClick={handleSubmit}>Sprawdź</button>
                <button className='task-button' onClick={createFraction}>NEXT</button>
            </div>
            {message && <p className='answer-info'>{message}</p>}
        </>
    );
};

export default ChangeFraction;
