import { apiData } from "../../utils/api/api";

export const USER_REGISTRATION_REQUEST = 'USER_REGISTRATION_REQUEST';
export const USER_REGISTRATION_SUCCESS = 'USER_REGISTRATION_SUCCESS';
export const USER_REGISTRATION_ERROR = 'USER_REGISTRATION_ERROR';

const userRegistrationSuccess = (payload) => ({ type: USER_REGISTRATION_SUCCESS, payload })

export function userRegistration(name, email, password) {
    return (dispatch) =>
        apiData.registration(name, email, password)
            .then((res) => {
                dispatch(userRegistrationSuccess(res));
            })
            .catch((error) => {
                console.log(error)
            })
}