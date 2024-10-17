import '../styles/multiplyFractions.css';
import { useState, useEffect } from 'react';

// Klasa do reprezentacji ułamka mieszanego (trzy liczby reprezentujące część całkowitą, licznik i mianownik)
class MixedFraction {
    constructor(intPart, numerator, denominator) {
        this.intPart = intPart || this.drawNumber();
        this.numerator = numerator || this.drawNumber();
        this.denominator = denominator || this.drawNumber();
    }

    //funkcja losująca liczbę w przedziale 1-10
    drawNumber() {
        return Math.floor(Math.random() * 10) + 1;
    }

    // Funkcja do konwersji na liczbę dziesiętną
    toDecimal() {
        return this.intPart + (this.numerator / this.denominator);
    }
}

const MultiplyFractions = () =>{

    const [fraction1, setFraction1] = useState(new MixedFraction());
    const [fraction2, setFraction2] = useState(new MixedFraction());
    const [result, setResult] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [message, setMessage] = useState('');

    // Funkcja do tworzenia nowych ułamków
    function createFraction() {
        const newFraction1 = new MixedFraction();
        const newFraction2 = new MixedFraction();
        const product = (newFraction1.toDecimal() * newFraction2.toDecimal()).toFixed(4);

        //aktualizacja stanów zmiennych stanowych
        setFraction1(newFraction1);
        setFraction2(newFraction2);
        setResult(parseFloat(product));
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
            <div className="buttons-panel">
                <button className='task-button' onClick={handleSubmit}>Sprawdź</button>
                <button className='task-button' onClick={createFraction}>NEXT</button>
            </div>
            {message && <p className='answer-info'>{message}</p>}
        </>
    );

}

export default MultiplyFractions;