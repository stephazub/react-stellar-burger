import { apiData } from "../../utils/api/api";


export const FORGOT_PASSWORD_REQUEST = 'FORGOT_PASSWORD_REQUEST';
export const FORGOT_PASSWORD_SUCCESS = 'FORGOT_PASSWORD_SUCCESS';
export const FORGOT_PASSWORD_ERROR = 'FORGOT_PASSWORD_ERROR';

const forgotPasswordSuccess = (payload) => ({ type: FORGOT_PASSWORD_SUCCESS, payload })

export function forgotPassword(email) {
    return (dispatch) =>
        apiData.forgot(email)
            .then(({ success }) => {
                dispatch(forgotPasswordSuccess(success));
            })
            .catch((error) => {
                console.log(error)
            })
}