import './CardWord.scss';
import React, { useState } from 'react';
export default function Word(props) {
    const { english, transcription, russian } = props;
    let [checked, setChecked] = useState(props.checked || false);

    const handleChecked = () => {
        setChecked(!checked);
    }

    return (
        <div className='word_card'>
            <p className='word_card__english'>{english}</p>
            <p className='word_card__transcription'>{transcription}</p>
            {
                !checked ? (<button className='word_card__translate' onClick={handleChecked}>Перевод</button>) : (<p>{russian}</p>)
            }
        </div>
    );
}