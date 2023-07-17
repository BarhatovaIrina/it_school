
import Tariff from './Tariff';
import tariffs from './tariff_data.json';
import styles from './TariffList.module.css';

export default function TariffList() {
    return (
        <div className={styles.list}>
            {
                tariffs.map((item, index) =>
                    <Tariff key={index} price={item.price} speed={item.speed} color={item.color} isSelected={item.isSelected} />
                )
            }
        </div>
    );
}