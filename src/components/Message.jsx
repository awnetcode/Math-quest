import '../styles/message.css';

// eslint-disable-next-line react/prop-types
const Message = ({message}) => {
    return(
        <>
        <div className="answer-message">
        {message && <p className='answer-info'>{message}</p>}
        </div>  
        </>
    )

}

export default Message;