import {tokenAxios} from "./axiosConfig";

const API_URL = `http://localhost:8080/api/accounts/`;
const editAccount = (idAccount, account) => {
    return tokenAxios.put(`${API_URL}edit/${idAccount}`, account)
}
export {editAccount}