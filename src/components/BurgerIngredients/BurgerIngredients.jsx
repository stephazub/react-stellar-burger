import styles from './BurgerIngredients.module.css';
import { BurgerIngredientsTabs} from '../BurgerIngredientsTab/BurgerIngredientsTab';
import { BurgerIngredientsSets } from '../BurgerIngredientsSets/BurgerIngredientsSets'

export default function BurgerIngredients() {
  return (
      <section className={styles.burger_ingredients}>
          <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
          <BurgerIngredientsTabs />
          <BurgerIngredientsSets />
      </section>
  )
}
