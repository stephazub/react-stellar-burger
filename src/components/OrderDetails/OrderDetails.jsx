import styles from './OrderDetails.module.css';
import { CheckMarkIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import done from '../../images/done.png';

export default function OrderDetails() {
    return (
        <>
            <div className={`${styles.details} pl-25 pr-25`}>
                <p className={`${styles.number} text text_type_digits-large mt-30 mb-8`}>034536</p>
                <p className="text text_type_main-medium mb-15">идентификатор заказа</p>
                <img src={done} className={styles.done} alt="Галка проверки заказа" />
                <p className="text text_type_main-default mt-15 mb-2">Ваш заказ начали готовить</p>
                <p className="text text_type_main-default text_color_inactive mb-30">Дождитесь готовности на орбитальной станции</p>
            </div>
        </>
    )
}