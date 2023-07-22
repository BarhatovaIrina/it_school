import './hero.css';
function Hero(props) {
    return (
        <div className="hero">
            <h2>Name: {props.name}</h2>
            <p>Вселенная: {props.universe}</p>
            <p>Альтерэго: {props.alterego}</p>
            <p>Род деятельности: {props.occupation}</p>
            <p>Друзья: {props.friends}</p>
            <p>Суперсила: {props.superpowers}</p>
            <img class='hero_img' src={props.url} alt='hero' />
        </div>
    );
}
export default Hero;