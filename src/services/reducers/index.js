import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burgerIngredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { burgerConstructorReducer } from './burgerConstructor';
import { orderDetailsReducer } from './orderDetails';
import { ingredientsTabReducer } from './burgerIngredientsTab';

export const rootReducer = combineReducers({
  burgerIngredients: burgerIngredientsReducer,
  ingredientDetails: ingredientDetailsReducer,
  burgerConstructor: burgerConstructorReducer,
  orderDetails: orderDetailsReducer,
  ingredientsTab: ingredientsTabReducer,
  })