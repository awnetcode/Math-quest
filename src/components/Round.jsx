import '../styles/round.css';

const Round = () =>{

    let number = 0;
    let factor = 0;
    let rounded = 0;
    let exponent = 0;

    function getRoundingFactor() {
        // Losowanie potęgi liczby 10 od 0 do 3
        const exponent = Math.floor(Math.random() * 4);
        return Math.pow(10, exponent); // Zwraca 10^0, 10^1, 10^2 lub 10^3
      }

    function getRandomNumber(min) {
        // Losowanie liczby od minimalnej wartości do 9999
        return Math.floor(Math.random() * (9999 - min + 1)) + min;
      }
      
      function roundNumber() {
         factor = getRoundingFactor();
         number = getRandomNumber(factor);  // Losuj liczbę od wartości `factor` w górę
      
         rounded = Math.round(number / factor) * factor;
      
        console.log(`Wylosowana liczba: ${number}`);
        console.log(`Czynnik zaokrąglenia: ${exponent}`);
        console.log(`Zaokrąglona liczba: ${rounded}`);
      }

      roundNumber();
    return(
    <>
    <h1 className="quest-title">Zaokrągl liczbę {number} do {factor}:</h1>
    <form action="#" className="quest-round">
        {rounded}
        <input type="number" />
    </form>
    
    </>
    )

};

export default Round;