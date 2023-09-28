import { useState } from 'react';
import './CardWord.scss';
import Word from './Word';
// import data from '../data.json';
import UseLocalStorage from '../CustomHooks/UseLocalStorage';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

export default function Words() {
    const { words } = useContext(ApiContext);
    let [index, setIndex] = useState(words.index || 0);
    const [checked, setChecked] = useState(false);
    const [countWordsLearned, setCountWordsLearned] = UseLocalStorage('countWordsLearned', 0); //сохраняем и используем кол-во слов из localStorage

    const toggleChecked = () => {
        setChecked(!checked);
        setCountWordsLearned(parseInt(countWordsLearned) + 1);
    }
    const NextWord = () => {
        index++;
        setChecked(false);
        if (index === words.length) {
            index = 0;
        }
        setIndex(index);
    }
    const PreviousWord = () => {
        index--;
        setChecked(false);
        if (index === -1) {
            index = words.length - 1;
        }
        setIndex(index);
    }
    if (!words) {
        return <div>Loading....</div>;
    }

    return (
        <div className='words_page'>
            <p className='leaned'>Количество изученных слов: {countWordsLearned}</p>
            <div className='slider' >
                <Word
                    english={words[index].english}
                    transcription={words[index].transcription}
                    russian={words[index].russian}
                    checked={checked}
                    toggleChecked={toggleChecked} />
                <div className='slider__buttons'>
                    <button onClick={PreviousWord} className='word_card__translate'>Предыдущее</button>
                    <button onClick={NextWord} className='word_card__translate'>Следующее</button>
                </div>

            </div>
            <div className='counter'>{`${index + 1} / ${words.length}`}</div>
        </div >
    );
}