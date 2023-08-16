import React from "react";
import {Tab} from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './BurgerIngredientsTab.module.css';
import { setActiveTab, tabIngredients } from '../../services/action/burgerIngredientsTab';
import { useDispatch, useSelector } from 'react-redux';

export default function BurgerIngredientsTabs() {

    const dispatch = useDispatch()
    const current = useSelector(state => state.ingredientsTab.current)
    const setCurrent = (value) => {
        dispatch(setActiveTab(value))
        dispatch(tabIngredients(value))
    }
    
    return (
        <div className={styles.tabs}>
            <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>
                Булки
            </Tab>
            <Tab value="sauce" active={current === 'sauce'} onClick={setCurrent}>
                Соусы
            </Tab>
            <Tab value="main" active={current === 'main'} onClick={setCurrent}>
                Начинки
            </Tab>
        </div>
    )
}