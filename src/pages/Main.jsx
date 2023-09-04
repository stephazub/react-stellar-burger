import styles from './pages.module.css';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import BurgerIngredients from '../components/BurgerIngredients/BurgerIngredients';
import {BurgerConstructor} from '../components/BurgerConstructor/BurgerConstructor';

export function Main() {

    return (
        <DndProvider backend={HTML5Backend}>
            <main className={styles.content}>
                <BurgerIngredients />
                <BurgerConstructor />
            </main>
        </DndProvider>
    )
}