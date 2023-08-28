import BurgerIngredientsItem from '../BurgerIngredientsItem/BurgerIngredientsItem';
import { useSelector } from 'react-redux';
import { PropTypes } from 'prop-types';

export default function BurgerIngredientsSet({ type }) {

  const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients);

  return (
    <>
      {ingredients
        .filter((ingredient) => ingredient.type === type)
        .map((ingredient) => (
          <BurgerIngredientsItem
            key={ingredient._id}
            ingredient={ingredient}
          />
        ))}
    </>
  )
}

BurgerIngredientsSet.propTypes = {
  type: PropTypes.string.isRequired,
}