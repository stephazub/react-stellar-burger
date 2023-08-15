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

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])

  const ingredients = useSelector(state => state.burgerIngredients.burgerIngredients);
  
  console.log(ingredients);
  
  const [openModal, setOpenModal] = React.useState(false);
  const [item, setItem] = React.useState(false);
  
  const handleIngredientClick = (item) => {
    setItem(item)
    setOpenModal(!openModal);
  }
  
  const handleOrderButtonClick = () => {
    setItem(false);
    setOpenModal(!openModal);
  }

  const closeModal = () => {
    setOpenModal(!openModal);
  }
  
  
  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients ingredients={ingredients} handleIngredientClick={handleIngredientClick} />
        <BurgerConstructor handleOrderButtonClick={handleOrderButtonClick} />
      </main>
      {openModal && <Modal onClose={closeModal} >
        {Boolean(item) ? <IngredientDetails ingredient={item} /> :
          <OrderDetails />}
      </Modal>}
    </>
  );
}

export default App;