import '../styles/content.css';
import Round from './Round';
import ChangeFraction from './ChangeFraction';

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