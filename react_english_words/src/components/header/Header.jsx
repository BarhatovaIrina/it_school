import './Header.scss';
export default function Header(props) {
    return (
        <div className='header'>
            <div className="logo">
                <img className="logo-img" src="./assets/images/word.png" alt="logo" />
                <a className='title' href="http://localhost:3000/">Translate word, please!</a>
            </div>
            <nav>
                <a className="nav-a" href="http://localhost:3000/">Log in</a>
                <a className="nav-a" href="http://localhost:3000/">Sign up</a>
            </nav>

        </div>
    );
}