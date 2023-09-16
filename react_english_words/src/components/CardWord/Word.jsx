import './CardWord.scss';

export default function Word(props) {
    const { english, transcription, russian, checked, toggleChecked } = props;

    return (
        <div className='word_card'>
            <p className='word_card__english'>{english}</p>
            <p className='word_card__transcription'>{transcription}</p>
            {
                !checked ? (<button className='word_card__translate' onClick={toggleChecked}>Перевод</button>) : (<button className='word_card__translate__rus'>{russian}</button>)
            }
        </div>
    );
}