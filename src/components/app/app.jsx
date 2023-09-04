import React from 'react';
import { AppHeader } from '../AppHeader/AppHeader';
import Modal from '../Modal/Modal';
import IngredientDetails from '../IngredientDetails/IngredientDetails';
import { useDispatch, useSelector } from 'react-redux';
import { getBurgerIngredients } from '../../services/action/burgerIngredients';
import { deleteIgredientDetails } from '../../services/action/ingredientDetails';
import { useCallback } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import { Authorization } from '../../pages/Authorization';
import { IngredientInfo } from '../../pages/IngredientInfo';
import { Feed } from '../../pages/Feed';
import { ForgotPassword } from '../../pages/ForgotPassword';
import { Main } from '../../pages/Main';
import { Profile } from '../../pages/Profile';
import { ProtectedRoute } from '../ProtectedRoute/ProtectedRoute';
import { Registration } from '../../pages/Registration';
import { ResetPassword } from '../../pages/ResetPassword';


export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const background = location.state && location.state.background;

  React.useEffect(() => {
    dispatch(getBurgerIngredients())
  }, [dispatch])


  const openIngredientDetailsModal = useSelector(state => state.ingredientDetails.ingredientDetails);

  const closeIngredientsModal = useCallback(() => {
    dispatch(deleteIgredientDetails())
  }, [dispatch])


  return (
    <>
      <AppHeader />

      <Switch location={background || location}>
        <Route exact={true} path="/" component={Main} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Authorization} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/reset-password" component={ResetPassword} />
        <ProtectedRoute path="/profile" component={Profile} />
        <Route path="/ingredients/:id" >
          <IngredientInfo />
        </Route>
        <ProtectedRoute path="/feed" component={Feed} />
      </Switch>

      {background && (
        <>
          <Route path="/ingredients/:id" >
            {openIngredientDetailsModal && (
              <Modal onClose={closeIngredientsModal}>
                <IngredientDetails />
              </Modal>
            )}
          </Route>
        </>
      )}
    </>
  );
}