import {LOGIN_FAIL, LOGIN_SUCCESS} from "./acctionType";

const initialState = {
    account: localStorage.getItem("account") ? JSON.parse(localStorage.getItem("account")) : {}
};
export const accountReducer = (state = initialState, action) => {
    switch (action) {
        case LOGIN_SUCCESS:
            return {
                ...state, account: action.payload
            }
        case LOGIN_FAIL:
            return {
                ...state, account: null, err: "Sai mật khẩu hoặc tài khoảng không hợp lệ"
            }
        default:
            return state
    }
}