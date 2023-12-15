import {LOGIN_SUCCESS, LOGIN_FAIL} from "./acctionType";
export const loginSuccess = (account)=>({
    type: LOGIN_SUCCESS,
    payload: account
})
export const loginFail = ()=>({
    type: LOGIN_FAIL
})