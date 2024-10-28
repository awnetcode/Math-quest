import '../styles/content.css';
import Round from './Round';
import ChangeFraction from './ChangeFraction';
import AddFractions from './AddFractions';
import MultiplyFractions from './MultiplyFractions';
import FractionPerCent from './FractionPerCent';
import Binary from './Binary';

// eslint-disable-next-line react/prop-types
const Content = ({activeProp, setScoreProp, scoreProp})=>{
    let content;

    switch(activeProp){
        case 'round':
            content = <Round setScoreProp={setScoreProp} scoreProp={scoreProp}/>;
            break;

        case 'change':
            content = <ChangeFraction setScoreProp={setScoreProp} scoreProp={scoreProp}/>
            break;

         case 'add':
            content = <AddFractions setScoreProp={setScoreProp} scoreProp={scoreProp}/>
            break;

        case 'multiply':
            content = <MultiplyFractions setScoreProp={setScoreProp} scoreProp={scoreProp}/>
            break;
        
        case 'fractionPerCent':
            content = <FractionPerCent setScoreProp={setScoreProp} scoreProp={scoreProp}/>
            break;

        case 'bin':
            content = <Binary setScoreProp={setScoreProp} scoreProp={scoreProp}/>
            break;

        case 'hex':
            content = 'Ten komponent nie jest jeszcze gotowy.'
            break;
        
        default:
            content = 'Tu się będą pojawiać zadania treningowe';
    }

    return(
        <>
        <main className="quest-content">
            {content}
        </main>
        </>
    )
}

export default Content;