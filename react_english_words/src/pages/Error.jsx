import { Link } from "react-router-dom";
import './Error.scss';
export default function Error() {
    return (
        <>
            <div>
                <div className="img404"><img src="./assets/images/404.gif" alt="404"></img></div>
                <p className="text404">Ой, похоже мы не можем найти нужную вам страницы</p>
                <p className="text404">Попробуйте начать <Link className="text404" to="/">с главной страницы </Link></p>

            </div>
        </>
    );
}