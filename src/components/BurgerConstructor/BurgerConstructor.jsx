import React from 'react';
import styles from './BurgerConstructor.module.css';
import { Button, CurrencyIcon, ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

export default function BurgerConstructor({ handleOrderButtonClick }) {
    return (
        <section className={`${styles.burger-constructor} mt-25`}>
            <ul className={`${styles.list} pl-3`}>
                <li className={`mb-4 ml-8`}>
                    <ConstructorElement
                        type="top"
                        isLocked={true}
                        text="Краторная булка N-200i (верх)"
                        price={1255}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    />
                </li>
                <div className={`${styles.scroll} pr-2`}>
                    <li className={`${styles.ingredient}`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Соус традиционный галактический"
                            price={15}
                            thumbnail={'https://code.s3.yandex.net/react/code/sauce-03.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Мясо бессмертных моллюсков Protostomia"
                            price={1337}
                            thumbnail={'https://code.s3.yandex.net/react/code/meat-02.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Плоды Фалленианского дерева"
                            price={874}
                            thumbnail={'https://code.s3.yandex.net/react/code/sp_1.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={300}
                            thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={300}
                            thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
                        />
                    </li>
                    <li className={`${styles.ingredient} mt-4`}>
                        <DragIcon type="primary" />
                        <ConstructorElement
                            text="Хрустящие минеральные кольца"
                            price={300}
                            thumbnail={'https://code.s3.yandex.net/react/code/mineral_rings.png'}
                        />
                    </li>
                </div>
                <li className={`ml-8 mt-4`}>
                    <ConstructorElement
                        type="bottom"
                        isLocked={true}
                        text="Краторная булка N-200i (низ)"
                        price={988}
                        thumbnail={'https://code.s3.yandex.net/react/code/bun-02.png'}
                    />
                </li>
            </ul>
            <div className={`${styles.order} mt-10 mr-4`}>
                <div className={styles.price}>
                    <p className="text text_type_digits-medium mr-2">610</p>
                    <CurrencyIcon type="primary" />
                </div>
                <Button onClick={handleOrderButtonClick} type="primary" size="large" htmlType="button">Оформить заказ</Button>
            </div>
        </section>
    )
}