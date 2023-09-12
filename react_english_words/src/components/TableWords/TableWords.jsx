import words from '../data.json';
import RowWord from './RowWord';
import './TableWords.scss';
export default function TableWords() {

    return (
        <div className='words_page'>

            <div className='table_words'>
                {
                    words.filter((item) => {
                        return item.english.includes('t')

                    }).map((item, index) =>
                        <RowWord key={index} english={item.english} transcription={item.transcription} russian={item.russian} />
                    )
                }
            </div>
        </div >
    );
}


//https://www.studystack.com/Languages