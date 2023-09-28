import { useState, useContext } from 'react';
import './TableWords.scss';
import ModalComponent from '../CustomizedDialogs/ModalComponent';
import { ApiContext } from '../../context/ApiContext';

export default function RowWord(props) {
    const { english, transcription, russian, id } = props;
    const { words, deleteWord, updateWord } = useContext(ApiContext);
    const [edited, setEdit] = useState(props.edited || false);
    const handleEdit = () => {
        setEdit(!edited);
    }

    const handleDelete = () => {
        deleteWord(id);
    }

    const handleUpdate = () => {
        // e.preventDefault();
        if (formState.russian.trim() === '' || formState.transcription.trim() === '' || formState.english.trim() === '') {
            setFormState({ ...formState, isValid: false });
            setModalState({ isShow: true, key: modalState.key + 1, text: 'Все поля должны быть заполнены.' });
        } else {
            setFormState({ ...formState, isValid: true });
            const newData = {
                'id': id,
                'english': formState.english,
                'russian': formState.russian,
                'transcription': formState.transcription
            }
            updateWord(newData);
            setEdit(!edited);
            setModalState({ isShow: false, key: modalState.key + 1, text: 'Все поля должны быть заполнены.' });
        }
    }

    const [modalState, setModalState] = useState({
        isShow: false,
        key: 0,
        text: ''
    });

    const [formState, setFormState] = useState({
        russian: russian,
        transcription: transcription,
        english: english,
        isValid: true
    });

    const handleValid = (e) => {
        const { name, value } = e.target;
        if (name === 'english' && !/^[a-zA-Z]+$/.test(value)) {
            setModalState({ isShow: true, key: modalState.key + 1, text: 'Введите английские буквы' });
            setFormState({ ...formState, [name]: '' });
        }
        if (name === 'russian' && !/^[ёЁа-яА-Я]+$/.test(value)) {
            setModalState({ isShow: true, key: modalState.key + 1, text: 'Введите русские буквы' });
            setFormState({ ...formState, [name]: '' });
        }
        if (name === 'transcription' && !/^\[[ˈˌa-zA-Z]+\]$/.test(value)) {
            setModalState({ isShow: true, key: modalState.key + 1, text: 'Введите символы для траскрипции' });
            setFormState({ ...formState, [name]: '' });
        }
    }
    const handleEditParams = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    if (edited) {
        return (
            <div className='row_word'>
                <input className={formState.english.trim() === '' && !formState.isValid ? 'empty eng' : 'eng'} type="text" name="english" value={formState.english} onChange={handleEditParams} onBlur={handleValid} />
                <input className={formState.transcription.trim() === '' && !formState.isValid ? 'empty transcription' : 'transcription'} type="text" name="transcription" value={formState.transcription} onChange={handleEditParams} onBlur={handleValid} />
                <input className={formState.russian.trim() === '' && !formState.isValid ? 'empty rus' : 'rus'} type="text" name="russian" value={formState.russian} onChange={handleEditParams} onBlur={handleValid} />
                <span className="buttons">
                    <button onClick={handleUpdate}><img src="./assets/images/checked.png" alt="go" /></button>
                    <button onClick={handleEdit}><img src="./assets/images/cancel.png" alt="cancel" /></button>

                </span>

                {modalState.isShow ? <ModalComponent key={modalState.key} text={modalState.text} /> : ''}
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
                    <button onClick={handleDelete}><img src="./assets/images/delete.png" alt="delete" /></button>
                </span>
            </div>
        )
    }
}


