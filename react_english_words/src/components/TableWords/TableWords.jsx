// import words from '../data.json';
import RowWord from './RowWord';
import { observer } from 'mobx-react';
import store from '../../store/WordsStore';
import { useEffect } from "react";
import './TableWords.scss';

const TableWords = observer(() => {

    useEffect(() => {
        store.getWords();
    }, [])

    if (store.isLoading)
        return <h1>Loading....</h1>

    return (
        <div className='words_page'>
            <h1>Таблица слов</h1>
            <div className='table_words'>
                {
                    store.words.map((item) =>
                        <RowWord key={item.id} id={item.id} english={item.english} transcription={item.transcription} russian={item.russian} />
                    )
                }
            </div>
        </div >
    );
})

export default TableWords;


//https://www.studystack.com/Languages