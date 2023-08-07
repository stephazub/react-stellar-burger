import React from "react";
import styles from './BurgerIngredients.module.css';
import BurgerIngredientsTab from '../BurgerIngredientsTab/BurgerIngredientsTab';
import BurgerIngredientsSets from '../BurgerIngredientsSets/BurgerIngredientsSets'
/*import PropTypes from 'prop-types';
import {ingredientPropType} from '../../utils/prop-types'*/

export default function BurgerIngredients({ ingredients, handleIngredientClick}) {
    return (
        <section className={styles.ingredients}>
          <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
          <BurgerIngredientsTab />
          <BurgerIngredientsSets ingredients={ingredients} handleIngredientClick={handleIngredientClick} />
        </section>
    )
};

/*BurgerIngredients.propTypes = {
    ingredients: PropTypes.arrayOf(ingredientPropType).isRequired,
  }*/