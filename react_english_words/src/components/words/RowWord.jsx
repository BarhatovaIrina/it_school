import './Words.css';
export default function RowWord(props) {
    const { english, transcription, russian } = props;

    return (
        <div className='row_word'>
            <span className="eng">{english}</span>
            <span className="transcription">{transcription}</span>
            <span className="rus">{russian}</span>
            <span className="buttons">
                <button><img src="./assets/images/edit.png" alt="edit" /></button>
                <button><img src="./assets/images/delete.png" alt="delete" /></button>
            </span>
        </div>
    );
}

