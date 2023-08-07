import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import BurgerIngredients from '../BurgerIngredients/BurgerIngredients';
import styles from './App.module.css';
import {ingredientsData} from '../api/api';

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

  return (
    <>
      <AppHeader />
      <main className={styles.main}>
        <BurgerIngredients/>

      </main>
    </>
  );
}

export default App;
