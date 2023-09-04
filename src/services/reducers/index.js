import { combineReducers } from 'redux';
import { burgerIngredientsReducer } from './burgerIngredients';
import { ingredientDetailsReducer } from './ingredientDetails';
import { burgerConstructorReducer } from './burgerConstructor';
import { orderDetailsReducer } from './orderDetails';
import { ingredientsTabReducer } from './burgerIngredientsTab';
import { userRegistrationReducer } from './registration';
import { forgotPasswordReducer } from './forgotPassword';
import { resetPasswordReducer } from './resetPassword';
import { userAuthorizationReducer } from './authorization';
import { profileReducer } from './user';

export const rootReducer = combineReducers({
    burgerIngredients: burgerIngredientsReducer,
    ingredientDetails: ingredientDetailsReducer,
    burgerConstructor: burgerConstructorReducer,
    orderDetails: orderDetailsReducer,
    scrollIngredients: ingredientsTabReducer,
    registration: userRegistrationReducer,
    forgotPassword: forgotPasswordReducer,
    resetPassword: resetPasswordReducer,
    userAuthorization: userAuthorizationReducer,
    profile: profileReducer,
  })