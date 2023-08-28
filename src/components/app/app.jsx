import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './app.module.css';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal  from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useDispatch,useSelector } from 'react-redux';
import { getBurgerIngredients } from '../../services/action/burgerIngredients';
import { getOrderDetails } from '../../services/action/orderDetails';
import { deleteIgredientDetails } from '../../services/action/ingredientDetails';
import {useCallback} from 'react';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients);
  

  const openIngredientDetailsModal = useSelector(state => state.ingredientDetails.ingredientDetails);
  const idIngredientsList = (ingredients.map((item) => item._id))
  
  const [openModal, setOpenModal] = React.useState(false);
  
  const handleOrderButtonClick = () => {
    setOpenModal(!openModal)
    dispatch(getOrderDetails(idIngredientsList))
  }

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])

  const closeModal = () => {
    setOpenModal(!openModal);
  }
  
  
  return (
    <DndProvider backend={HTML5Backend}>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients />
        <BurgerConstructor handleOrderButtonClick={handleOrderButtonClick} />
      </main>
      {Boolean(openIngredientDetailsModal) && (
        <Modal onClose={closeIngredientsModal}>
          <IngredientDetails />
        </Modal>
      )}
      {openModal && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </DndProvider>
  );
}

export default App;