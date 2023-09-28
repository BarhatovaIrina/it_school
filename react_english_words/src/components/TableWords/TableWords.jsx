// import words from '../data.json';
import RowWord from './RowWord';
// import './TableWords.scss';
import { useContext } from 'react';
import { ApiContext } from '../../context/ApiContext';

export default function TableWords() {
    const { words } = useContext(ApiContext);

    return (
        <div className='words_page'>

            <div className='table_words'>
                {
                    /// ========sort by symbol=========
                    // words.filter((item) => {
                    //     return item.english.includes('t')

                    // }).map((item, index) =>
                    //     <RowWord key={item.id} english={item.english} transcription={item.transcription} russian={item.russian} />
                    // )
                    words.map((item) =>
                        <RowWord key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} />
                    )
                }
            </div>
        </div >
    );
}


//https://www.studystack.com/Languages