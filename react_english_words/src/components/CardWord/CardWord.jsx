import { useState } from 'react';
import './CardWord.scss';
import Word from './Word';
import data from '../data.json';
import useLocalStorage from '../CustomHooks/useLocalStorage';

export default function Words() {

    let [index, setIndex] = useState(data.index || 0);
    const [checked, setChecked] = useState(false);

    const [countWordsLearned, setCountWordsLearned] = useLocalStorage('countWordsLearned', 0); //сохраняем и используем кол-во слов из localStorage

    const toggleChecked = () => {
        setChecked(!checked);
        setCountWordsLearned(parseInt(countWordsLearned) + 1);
    }
    const NextWord = () => {
        index++;
        setChecked(false);
        if (index === data.length) {
            index = 0;
        }
        setIndex(index);
    }
    const PreviousWord = () => {
        index--;
        setChecked(false);
        if (index === -1) {
            index = data.length - 1;
        }
        setIndex(index);
    }

    return (
        <div className='words_page'>
            <p className='leaned'>Количество изученных слов: {countWordsLearned}</p>
            <div className='slider' >
                <Word
                    english={data[index].english}
                    transcription={data[index].transcription}
                    russian={data[index].russian}
                    checked={checked}
                    toggleChecked={toggleChecked} />
                <div className='slider__buttons'>
                    <button onClick={PreviousWord} className='word_card__translate'>Предыдущее</button>
                    <button onClick={NextWord} className='word_card__translate'>Следующее</button>
                </div>

            </div>
            <div className='counter'>{`${index + 1} / ${data.length}`}</div>
        </div >
    );
}