import { action, makeAutoObservable, runInAction } from 'mobx';

class WordsStore {
    words = [];
    isLoading = false;
    constructor() {
        makeAutoObservable(this);
    }

    @action async getWords() {
        this.isLoading = true;
        try {
            const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const data = await response.json();
            runInAction(() => {
                this.words = data;
                this.isLoading = false;
            })

        }
        catch (error) {
            console.error('Ошибка при загрузке данных!')
            runInAction(() => {
                this.isLoading = false;
            })

        }
        finally {
            this.isLoading = false;
        }

    }
    @action addWord(word) {
        this.isLoading = true;
        // fetch('/api/words/add', {
        fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "english": word.english,
                    "transcription": word.transcription,
                    "russian": word.russian,
                }
            ),
            headers: {
                'Content-Type': 'application/json; charset=utf-8',
            }
        })
            .then((response) => {
                runInAction(() => {
                    response.json()
                    this.words.push(word);
                    this.isLoading = false;
                })

            })
            .catch((error) => {
                console.error(error);
                this.isLoading = false;
            });

    }

    @action deleteWord(id) {
        this.isLoading = true;
        this.words = this.words.filter((item) => item.id !== id)
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${id}/delete`, {
            method: 'POST'
        })
            .then(() => {
                this.words = this.words.filter((item) => item.id !== id)
                this.isLoading = false;
            })
            .catch((error) => {
                console.error(error);
                runInAction(() => {
                    this.isLoading = false;
                })
            });
    }

    @action updateWord(word) {
        this.isLoading = true;
        const newWord = JSON.stringify(
            {
                "id": word.id,
                "english": word.english,
                "transcription": word.transcription,
                "russian": word.russian,
                "tags": "easy",
                "tags_json": "[\"easy\"]"
            })
        fetch(`http://itgirlschool.justmakeit.ru/api/words/${word.id}/update`, {
            method: 'POST',
            body: newWord,
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                runInAction(() => {
                    this.words = this.words.map((item) => {
                        if (item.id === data.id) {
                            return data;
                        } else {
                            return item;
                        }
                    });
                    console.log(this.words);
                    this.isLoading = false;
                })

            })
            .catch((error) => {
                console.error(error);
                runInAction(() => {
                    this.isLoading = false;
                })
            });
    }

}
const store = new WordsStore();
export default store;
