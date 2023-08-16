import React from "react";
import styles from './BurgerIngredientsSets.module.css';
import BurgerIngredientsSet from '../BurgerIngredientsSet/BurgerIngredientsSet';
import { useDispatch, useSelector } from 'react-redux';
import { useRef, useEffect } from 'react';
import { setActiveTab } from '../../services/action/burgerIngredientsTab';

export default function BurgerIngredientsSets() {
    const dispatch = useDispatch()
    const tab = useSelector(state => state.ingredientsTab.tab)

    const bunRef = useRef();
    const sauceRef = useRef();
    const mainRef = useRef();
    const tabRef = useRef();

    useEffect(() => {
        if (tab === 'bun') {
            bunRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (tab === 'sauce') {
            sauceRef.current.scrollIntoView({ behavior: 'smooth' })
        }
        if (tab === 'main') {
            mainRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [tab])

    useEffect(() => {
        const headings = [
            bunRef.current,
            sauceRef.current,
            mainRef.current
        ]
        const observer = new IntersectionObserver((headings) => {
            headings.forEach((heading) => {
                if (heading.target === bunRef.current) {
                    dispatch(setActiveTab('bun'))
                }
                if (heading.target === sauceRef.current) {
                    dispatch(setActiveTab('sauce'))
                }
                if (heading.target === mainRef.current) {
                    dispatch(setActiveTab('main'))
                }
            })

        },
            {
                root: tabRef.current,
                rootMargin: '0px 0px -90% 0px'
            })
        headings.forEach((heading) => observer.observe(heading))

    }, [dispatch])

export default function BurgerIngredientsSets ({ingredients, handleIngredientClick}) {
    return (
        <div className={`${styles.scroll} mt-10 pr-2`}>
            <div>
                <h2 className="text text_type_main-medium  mb-6">Булки</h2>
                <ul className={`${styles.ingredients} pl-4`}>
                    {ingredients.filter((item) => item.type === 'bun').map((item) => (<BurgerIngredientsItem handleIngredientClick={handleIngredientClick} key={item._id} ingredient={item}/>))}
                </ul>
            </div>
            <div>
                <h2 className="text text_type_main-medium mt-10 mb-6">Соусы</h2>
                <ul className={`${styles.ingredients} pl-4`}>
                    {ingredients.filter((item) => item.type === 'sauce').map((item) => (<BurgerIngredientsItem handleIngredientClick={handleIngredientClick} key={item._id} ingredient={item} />))}
                </ul>
            </div>
            <div>
                <h2 className="text text_type_main-medium mt-10 mb-6">Начинки</h2>
                <ul className={`${styles.ingredients} pl-4`}>
                    {ingredients.filter((item) => item.type === 'main').map((item) => (<BurgerIngredientsItem handleIngredientClick={handleIngredientClick} key={item._id} ingredient={item} />))}
                </ul>
            </div>
        </div>
    )
}

BurgerIngredientsSets.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  }