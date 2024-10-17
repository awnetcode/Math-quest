import '../styles/content.css';
import Round from './Round';
import ChangeFraction from './ChangeFraction';
import AddFractions from './AddFractions';
import MultiplyFractions from './MultiplyFractions';

// eslint-disable-next-line react/prop-types
const Content = ({activeProp})=>{
    let content;

    switch(activeProp){
        case 'round':
            content = <Round/>;
            break;

        case 'change':
            content = <ChangeFraction/>
            break;

         case 'add':
            content = <AddFractions/>
            break;

        case 'multiply':
            content = <MultiplyFractions/>
            break;
        
        case 'bin':
            content = 'Ten komponent nie jest jeszcze gotowy.'
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