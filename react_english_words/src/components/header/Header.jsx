import { NavLink, Link } from 'react-router-dom';
import './Header.scss';
export default function Header(props) {
    return (
        <div className='header'>
            <div className="logo">
                <Link className='title' to="/"><img className="logo-img" src="./assets/images/word.png" alt="logo" /></Link>
                <Link className='title' to="/">Translate word, please!</Link>
            </div>
            <nav>
                <NavLink className="nav-a" to="/game">Тренажер слов</NavLink>
                <NavLink className="nav-a" to="/table">Таблица слов</NavLink>
            </nav>

        </div>
    );
}