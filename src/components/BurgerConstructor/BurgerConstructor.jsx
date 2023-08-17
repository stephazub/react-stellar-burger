import React from 'react';
import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { setBun, addIngredient, deleteIngredient } from '../../services/action/burgerConstructor';
import { BurgerConstructorItem } from '../BurgerConstructorItem/BurgerConstructorItem';
import { OrderRegistration } from '../OrderRegistration/OrderRegistration';
import { useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
//import { PropTypes } from 'prop-types';

export default function BurgerConstructor({ handleOrderButtonClick }) {
    const dispatch = useDispatch()

    const main = useSelector(state => state.burgerConstructor.mainList)
    const buns = useSelector(state => state.burgerConstructor.bunsList)

    const [, dropIngredient] = useDrop(() => ({
        accept: 'ingredient',
        drop: (item => addElement(item.ingredient))
    }))

    const addElement = (element) => {
        element = { ...element, id: nanoid() }
        if (element.type === 'bun') {
            dispatch(setBun(element))
        }
        if (element.type !== 'bun') {
            dispatch(addIngredient(element))
        }

    }

    const deleteElement = (element) => {
        dispatch(deleteIngredient(element))
    }


    return (
        <section className={`${styles.burger-constructor} mt-25`} ref={dropIngredient}>
            <ul className={`${styles.list} pl-3`}>
                {buns.map((element) => {
                    if (element.type === 'bun')
                        return (
                            <li className={`mb-4 ml-8`} key={element.id}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${element.name} (верх)`}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </li>
                        )
                }
                )}
                <div className={`${styles.scroll} pr-2`}>
                    {main.map((element, index) => {
                        if (element.type !== 'bun')
                            return (
                                <BurgerConstructorItem
                                    element={element}
                                    index={index}
                                    id={element.id}
                                    key={element.id}
                                    deleteElement={deleteElement}
                                />
                            )
                    }
                    )}
                </div>
                {buns.map((element) => {
                    if (element.type === 'bun')
                        return (
                            <li className={`mt-4 ml-8`} key={element.id}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${element.name} (низ)`}
                                    price={element.price}
                                    thumbnail={element.image}
                                />
                            </li>
                        )
                }
                )}
            </ul>
            {buns.length > 0 ?
                <OrderRegistration handleOrderButtonClick={handleOrderButtonClick} />
                : null}
        </section>
    )
}

/*BurgerConstructor.propTypes = {
    handleOrderClick: PropTypes.func.isRequired
}*/