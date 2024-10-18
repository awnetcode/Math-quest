import PropTypes from 'prop-types';

const Draft = ({ draftValue, setDraftValue }) => {

    const draftChange = (note) => {
        setDraftValue(note.target.value);
    }

    return (
        <input 
            type="text" 
            className="draft" 
            placeholder="brudnopis"
            onChange={draftChange} 
            value={draftValue} 
        />
    );
}

Draft.propTypes = {
    draftValue: PropTypes.string.isRequired,
    setDraftValue: PropTypes.func.isRequired
};

export default Draft;
