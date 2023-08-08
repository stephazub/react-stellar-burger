import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './App.module.css';
import {ingredientsData} from '../api/api';
import BurgerConstructor from '../BurgerConstructor/BurgerConstructor';
import Modal  from '../Modal/Modal';
import OrderDetails from '../OrderDetails/OrderDetails';
import IngredientDetails from '../IngredientDetails/IngredientDetails';

function App() {
  const [ingredients, setIngedients] = React.useState([]);
  
  React.useEffect(() => {
    ingredientsData.getData()
      .then(({ success, data }) => {
        if (success) {
          setIngedients(data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);
  
  console.log(ingredients);
  
  const [openModal, setOpenModal] = React.useState(false);
  const [item, setItem] = React.useState(false);
  
  const handleIngredientClick = (item) => {
    setItem(item)
    setOpenModal(!openModal);
  }
  
  const handleOnButtonClick = () => {
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
        <BurgerConstructor handleOnButtonClick={handleOnButtonClick} />
      </main>
      {openModal && <Modal onClose={closeModal} >
        {item ? <IngredientDetails ingredient={item} /> :
          <OrderDetails />}
      </Modal>}
    </>
  );
}

export default App;


/*{openModal && <Modal onClose={closeModal} >
        {item ? <IngredientDetails ingredient={item} /> :
          <OrderDetails />}
      </Modal>}*/