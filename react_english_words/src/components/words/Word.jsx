import './Words.css';
export default function Word(props) {
    const { english } = props;
    // const { english, transcription, russian } = props;
    return (
        <div className='word_card'>
            <p>{english}</p>
        </div>
    );
}