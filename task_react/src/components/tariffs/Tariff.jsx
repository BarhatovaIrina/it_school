import styles from './Tariff.module.css';
function Tariff(props) {
    // const { price, speed } = props;
    let classSelected = "";
    if (props.isSelected) {
        classSelected = styles.selected;
    }
    return (
        <div className={classSelected + ' ' + styles.tariff} style={{ background: props.color }} >
            <p className={styles.title}>Безлимитный {props.price}</p>
            <p className={styles.price_card}>
                <span className={styles.price_card_rub}>руб</span>
                <span className={styles.price_card_price}>{props.price}</span>
                <span className={styles.price_card_month}>/мес</span>
            </p>
            <p className={styles.speed}>до {props.speed}Мбит/сек</p>
            <p className={styles.text}>Объем включенного трафика не ограничен</p>
        </div>
    )
}

export default Tariff;