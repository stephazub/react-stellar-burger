import styles from './pages.module.css';
import IngredientDetails from '../components/IngredientDetails/IngredientDetails';

export function IngredientInfo() {

    return (
        <div className={styles.ingredient_info}>
            <IngredientDetails />
        </div>
    )
}