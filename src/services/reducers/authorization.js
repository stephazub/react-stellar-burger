import { getCookie } from "../../utils/cookies"
import { USER_AUTHORIZATION_SUCCESS } from "../action/authorization"
import { USER_LOGOUT_SUCCESS } from "../action/logout"

export const initialState = {
    authorization: getCookie('access') ? true : false,
    user: {}
}

export const userAuthorizationReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_AUTHORIZATION_SUCCESS: {
            return {
                ...state,
                authorization: true,
                user: action.payload.user
            }
        }
        case USER_LOGOUT_SUCCESS: {
            return {
                ...state,
                authorization: false,
                user: {}
            }
        }
        default: {
            return state;
        }
    }
}