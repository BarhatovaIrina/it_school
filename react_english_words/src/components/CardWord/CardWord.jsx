import { useState } from 'react';
import './CardWord.scss';
import Word from './Word';
import data from '../data.json';

export default function Words() {

    let [index, setIndex] = useState(data.index || 0);
    const [checked, setChecked] = useState(false);

    const toggleChecked = () => {
        setChecked(!checked);
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
            <div className='slider' >
                <button onClick={PreviousWord} className='word_card__translate'>Prev</button>
                <Word
                    english={data[index].english}
                    transcription={data[index].transcription}
                    russian={data[index].russian}
                    checked={checked}
                    toggleChecked={toggleChecked} />
                <button onClick={NextWord} className='word_card__translate'>Next</button>
            </div>
            <div>{`${index + 1} / ${data.length}`}</div>
        </div >
    );
}