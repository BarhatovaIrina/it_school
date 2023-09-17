import { useEffect, useRef } from 'react';
import './CardWord.scss';

export default function Word(props) {
    const { english, transcription, russian, checked, toggleChecked } = props;
    // const increseCountClick = ()=> {
    //     props.increseCount;
    // }

    const ref = useRef();
    useEffect(() => ref.current.focus(), [])
    return (
        <div className='word_card'>
            <p className='word_card__english'>{english}</p>
            <p className='word_card__transcription'>{transcription}</p>
            {
                !checked ? (<button className='word_card__translate' onClick={toggleChecked} ref={ref}>Перевод</button>) : (<button className='word_card__translate__rus'>{russian}</button>)
            }
        </div>
    );
}