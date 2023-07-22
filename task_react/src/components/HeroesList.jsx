import Hero from './hero.jsx';
import Heroes from './data.json';

function HeroesList() {
    return (
        <div className='heroes'>
            {
                Heroes.map((hero) =>
                    <Hero name={hero.name} universe={hero.universe} alterego={hero.alterego} occupation={hero.occupation}
                        friends={hero.friends} superpowers={hero.superpowers} url={hero.url} />
                )
            }
        </div>
    );
}

export default HeroesList;