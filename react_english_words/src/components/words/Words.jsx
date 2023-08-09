import words from './data.json';
import RowWord from './RowWord';
import Word from './Word';
import './Words.scss';
export default function Words() {

    return (
        <div className='words_page'>
            <Word english='apple' transcription='qq' russian='rrr' />
            <div className='table_words'>
                {words.map((item, index) =>
                    <RowWord key={index} english={item.english} transcription={item.transcription} russian={item.russian} />
                )
                }
            </div>
        </div >
    );
}


//https://www.studystack.com/Languages