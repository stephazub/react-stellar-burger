import styles from './BurgerIngredients.module.css';
import { BurgerIngredientsTabs} from '../BurgerIngredientsTab/BurgerIngredientsTab';
import { BurgerIngredientsSets } from '../BurgerIngredientsSets/BurgerIngredientsSets'

export default function BurgerIngredients() {
    return (
        <section className={styles.ingredients}>
          <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
          <BurgerIngredientsTabs />
          <BurgerIngredientsSets />
        </section>
    )
};

