import '../styles/round.css';

const Round = () =>{

    let roundNumber = 20;
    const questNumber = Math.floor(Math.random()*9999);
    {questNumber < 1000 ? roundNumber = 100 : roundNumber = 1000}

    return(
    <>
    <h1 className="quest-title">Zaokrągl liczbę do {roundNumber}</h1>
    <form action="#" className="quest-round">
        {questNumber}
        <input type="number" />
    </form>
    
    </>
    )
};

export default Round;