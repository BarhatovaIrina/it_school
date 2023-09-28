import { createContext } from "react";
import { useState, useEffect } from "react";
import LoadingComponent from "../components/CustomizedDialogs/LoadingComponent";

export const ApiContext = createContext();

export function ApiContextProvider({ children }) {
    const [words, setWords] = useState(false);

    useEffect(() => {
        getWords();
    }, [])

    const getWords = () => {
        try {
            fetch('http://itgirlschool.justmakeit.ru/api/words')
                .then((response) => response.json())
                .then((data) => setWords(data));
        } catch (e) {
            console.error('errrooorrr!!!')
        }
    }
    const updateWord = (dataForm) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${dataForm.id}/update`, {
            method: 'POST',
            body: JSON.stringify(
                {
                    "id": dataForm.id,
                    "english": dataForm.english,
                    "transcription": dataForm.transcription,
                    "russian": dataForm.russian,
                    "tags": "easy",
                    "tags_json": "[\"easy\"]"
                }
            ),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                response.json()
                getWords();
            })
            .catch((error) => {
                console.error(error);
            });
    }
    const addWord = (dataForm) => {
        fetch('/api/words/add', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "id": dataForm.id,
                    "english": dataForm.english,
                    "transcription": dataForm.transcription,
                    "russian": dataForm.russian,
                }
            ),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
            .then((response) => {
                response.json()
                getWords();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const deleteWord = (id) => {
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST'
        })
            .then(() => {
                getWords();
            })
            .catch((error) => {
                console.error(error);
            });
    }

    if (!words)
        // return <h1>Loading....</h1>
        return <LoadingComponent />


    return (
        <ApiContext.Provider value={{ words, setWords, deleteWord, addWord, updateWord }}>
            {children}
        </ApiContext.Provider>
    )
}
