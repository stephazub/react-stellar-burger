import styles from './OrderRegistration.module.css';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

export function OrderRegistration({ handleOrderButtonClick }) {

    const main = useSelector(state => state.burgerConstructor.mainList)
    const buns = useSelector(state => state.burgerConstructor.bunsList)

    const sumOrder = useMemo(() => (
        main.reduce((sum, { price }) => sum + price, 0) + (buns.reduce((sum, { price }) => sum + price, 0) * 2)
    ), [main, buns]);

    return (
        <div className={`${styles.order} mt-10 mr-4`}>
            <div className={styles.price}>
                <p className="text text_type_digits-medium mr-2">{sumOrder}</p>
                <CurrencyIcon type="primary"  />
            </div>
            <Button onClick={handleOrderButtonClick} type="primary" size="large" htmlType="button">Оформить заказ</Button>
        </div>
    )
}

OrderRegistration.propTypes = {
    handleOrderButtonClick: PropTypes.func.isRequired
}