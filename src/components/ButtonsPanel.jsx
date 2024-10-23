import '../styles/buttonsPanel.css';

// eslint-disable-next-line react/prop-types
const ButtonsPanel = ({checkButton, nextButton}) => {
    return(
        <>
             <div className="buttons-panel">
                <button className='task-button' onClick={checkButton}>Sprawdź</button>
                <button className='task-button' onClick={nextButton}>NEXT</button>
            </div>       
        </>
    )
}

export default ButtonsPanel;