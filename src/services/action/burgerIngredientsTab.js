export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB';
export const TAB_INGREDIENTS = 'TAB_INGREDIENTS';

export const setActiveTab = (value) => ({ type: SET_ACTIVE_TAB, payload: value});
export const tabIngredients = (value) => ({ type: TAB_INGREDIENTS, payload: value});