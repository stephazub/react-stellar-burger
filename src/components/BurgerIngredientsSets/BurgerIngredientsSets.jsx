import React from "react";
import styles from './BurgerIngredientsSets.module.css';
import { ingredientPropType } from '../../utils/prop-types';
import PropTypes from 'prop-types';
import BurgerIngredientsItem from "../BurgerIngredientsItem/BurgerIngredientsItem";

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