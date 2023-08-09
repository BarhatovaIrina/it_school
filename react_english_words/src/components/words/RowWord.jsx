import { useState } from 'react';
import './Words.scss';
export default function RowWord(props) {
    const { english, transcription } = props;

    const [edited, setEdit] = useState(props.edited || false);
    const [russian, setEditRus] = useState(props.russian);

    const handleEdit = () => {
        setEdit(!edited);
        setEditRus(props.russian);
    }

    const handleEditRus = (e) => {
        setEditRus(e.target.value);
    }

    if (edited) {
        return (
            <div className='row_word'>
                <input className="eng" type="text" placeholder={english} />
                <input className="transcription" type="text" placeholder={transcription} />
                <input className="rus" type="text" value={russian} onChange={handleEditRus} />
                <span className="buttons">
                    <button ><img src="./assets/images/checked.png" alt="go" /></button>
                    <button onClick={handleEdit}><img src="./assets/images/cancel.png" alt="cancel" /></button>
                </span>
            </div>
        )
    }
    else {
        return (
            <div className='row_word'>
                <span className="eng">{english}</span>
                <span className="transcription">{transcription}</span>
                <span className="rus">{russian}</span>
                <span className="buttons">
                    <button onClick={handleEdit}><img src="./assets/images/edit.png" alt="edit" /></button>
                    <button><img src="./assets/images/delete.png" alt="delete" /></button>
                </span>
            </div>
        )
    }
}


