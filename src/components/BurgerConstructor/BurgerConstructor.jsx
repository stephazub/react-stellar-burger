import styles from './BurgerConstructor.module.css';
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch, useSelector } from 'react-redux';
import { setBun, addIngredient, deleteIngredient } from '../../services/action/burgerConstructor';
import { BurgerConstructorItem } from '../BurgerConstructorItem/BurgerConstructorItem';
import { OrderRegistration } from '../OrderRegistration/OrderRegistration';
import { useDrop } from 'react-dnd';
import { nanoid } from 'nanoid';
import { PropTypes } from 'prop-types';

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
        <section className={`${styles.burger - constructor} mt-25`} ref={dropIngredient}>
            <ul className={`${styles.list} pl-3`}>
                {buns.map((el) => {
                    if (el.type === 'bun')
                        return (
                            <li className={`mb-4 ml-8`} key={el.id}>
                                <ConstructorElement
                                    type="top"
                                    isLocked={true}
                                    text={`${el.name} (верх)`}
                                    price={el.price}
                                    thumbnail={el.image}
                                />
                            </li>
                        )
                }
                )}
                <div className={`${styles.scroll} pr-2`}>
                    {main.map((el, index) => {
                        if (el.type !== 'bun')
                            return (
                                <BurgerConstructorItem
                                    element={el}
                                    index={index}
                                    id={el.id}
                                    key={el.id}
                                    deleteElement={deleteElement}
                                />
                            )
                    }
                    )}
                </div>
                {buns.map((el) => {
                    if (el.type === 'bun')
                        return (
                            <li className={`mt-4 ml-8`} key={el.id}>
                                <ConstructorElement
                                    type="bottom"
                                    isLocked={true}
                                    text={`${el.name} (низ)`}
                                    price={el.price}
                                    thumbnail={el.image}
                                />
                            </li>
                        )
                }
                )}
            </ul>
            <OrderRegistration handleOrderButtonClick={handleOrderButtonClick} />
        </section>
    )
}

BurgerConstructor.propTypes = {
    handleOrderButtonClick: PropTypes.func.isRequired
}