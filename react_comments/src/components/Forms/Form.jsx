import { useState } from "react";
import Comments from "../Comments/Comments";
import './Form.scss';

export default function Form() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [comments, setComments] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'body') {
            setBody(value);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title === '' || body === '') {
            alert('Введите данные')
        }
        else {
            const newComment = { title, body };
            setComments([newComment, ...comments]);
            setTitle('');
            setBody('');
        }
    };
    return (
        <div >
            <form onSubmit={handleSubmit} className="formPost">
                <div className="formText">
                    <label >
                        Заголовок комментария</label>
                    <input type="text" name="title" value={title} onChange={handleChange} />

                </div>
                <div className="formText">
                    <label>
                        Текст комментария</label>
                    <input type="text" name="body" value={body} onChange={handleChange} />


                </div>

                <button type="submit" className="addPost">Создать комментарий</button>
            </form>
            <Comments comments={comments} />
        </div>
    )
}