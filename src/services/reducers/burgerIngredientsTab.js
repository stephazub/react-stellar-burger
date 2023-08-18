import {
    SET_ACTIVE_TAB,
    TAB_INGREDIENTS
} from '../action/burgerIngredientsTab'

const tabState = {
    current: 'sauce',
    tab: 'bun'
}

export const ingredientsTabReducer = (state = tabState, action) => {
    switch (action.type) {
        case SET_ACTIVE_TAB: {
            return {
                ...state,
                current: action.payload
            }
        }
        case TAB_INGREDIENTS: {
            return {
                ...state,
                tab: action.payload
            }
        }
        default: {
            return state;
        }
    }
}