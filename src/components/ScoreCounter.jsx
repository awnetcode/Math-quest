import '../styles/scoreCounter.css';

// eslint-disable-next-line react/prop-types
const ScoreCounter = ({scoreProp}) =>{

    return(
        <>
        <div className="score">
        Twój wynik: {scoreProp}
        </div>
        </>
    )

}

export default ScoreCounter;