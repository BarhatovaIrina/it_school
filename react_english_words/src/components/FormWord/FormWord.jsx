import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApiContext } from '../../context/ApiContext';
import './FormWord.scss';
import ModalComponent from '../CustomizedDialogs/ModalComponent';

export default function FormWord(props) {
    const { words, addWord } = useContext(ApiContext);

    const [formState, setFormState] = useState({
        russian: '',
        transcription: '',
        english: '',
        isValid: false
    });
    const [modalState, setModalState] = useState({
        isShow: false,
        key: 0,
        text: ''
    });
    const navigate = useNavigate();
    const handleEditParams = (e) => {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

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

    const handleAdd = (e) => {
        e.preventDefault();
        if (formState.russian.trim() === '' || formState.transcription.trim() === '' || formState.english.trim() === '') {
            setFormState({ ...formState, isValid: false });
            setModalState({ isShow: true, key: modalState.key + 1, text: 'Все поля должны быть заполнены.' });
        } else {
            setFormState({ ...formState, isValid: true });
            const newData = {
                'english': formState.english,
                'russian': formState.russian,
                'transcription': formState.transcription
            }
            addWord(newData);
            setModalState({ isShow: false, key: modalState.key + 1, text: 'Все поля должны быть заполнены.' });
            navigate('/table');
        }

    };
    return (
        <>
            <div className='row_word formAdd'>
                <input className={formState.english.trim() === '' && !formState.isValid ? 'empty eng' : 'eng'} required type="text" name="english" value={formState.english} onChange={handleEditParams} onBlur={handleValid} />
                <input className={formState.transcription.trim() === '' && !formState.isValid ? 'empty transcription' : 'transcription'} required type="text" name="transcription" value={formState.transcription} onChange={handleEditParams} onBlur={handleValid} />
                <input className={formState.russian.trim() === '' && !formState.isValid ? 'empty rus' : 'rus'} required type="text" name="russian" value={formState.russian} onChange={handleEditParams} onBlur={handleValid} />
                <button className='buttonAdd' onClick={handleAdd}>Add Word</button>
                {modalState.isShow ? <ModalComponent key={modalState.key} text={modalState.text} /> : ''}
            </div>
        </>
    )
}