import {
    GET_BURGER_INGREDIENTS_REQUEST,
    GET_BURGER_INGREDIENTS_SUCCESS,
    GET_BURGER_INGREDIENTS_ERROR
  } from '../action/burgerIngredients';
  
  export const burgerIngredientsInitialState = {
    burgerIngredients: [],
    burgerIngredientsRequest: false,
    burgerIngredientsError: false,
  }
  
  export const burgerIngredientsReducer = (state = burgerIngredientsInitialState, action) => {
    switch (action.type) {
      case GET_BURGER_INGREDIENTS_REQUEST: {
        return {
          ...state,
          burgerIngredientsRequest: true
        }
      }
      case GET_BURGER_INGREDIENTS_SUCCESS: {
        return {
          ...state,
          burgerIngredients: [...action.payload],
          burgerIngredientsError: false,
        }
      }
      case GET_BURGER_INGREDIENTS_ERROR: {
        return {
          ...state,
          burgerIngredientsRequest: false,
          burgerIngredientsError: true
        }
      }
      default: {
        return state;
      }
    }
  }