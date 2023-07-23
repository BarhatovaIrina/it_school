import Tariff from './Tariff';
import tariffs from './tariff_data.json';
import styles from './TariffList.module.css';
import { useState } from 'react';

export default function TariffList() {
    const [selected, setSelected] = useState(0);

    const handleChangeSelected = (index) => {
        setSelected(index);
    }
    return (
        <div className={styles.list}>
            {
                tariffs.map((item, index) => (
                    <div key={index} onClick={() => handleChangeSelected(index)}>
                        {(index === selected) ?
                            <Tariff price={item.price} speed={item.speed} color={item.color} isSelected='true' />
                            : <Tariff price={item.price} speed={item.speed} color={item.color} />
                        }
                    </div>


                ))
            }
        </div>
    );
}