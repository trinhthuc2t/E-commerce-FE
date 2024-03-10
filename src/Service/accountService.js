import {tokenAxios} from "./axiosConfig";

const API_URL = `http://localhost:8080/api/accounts/`;
const editAccount = (idAccount, account) => {
    return tokenAxios.put(`${API_URL}edit/${idAccount}`, account)
}
const findById = (nameSearch) => {
    console.log(`${API_URL}searchUserName?nameSearch=${nameSearch}`)
    return tokenAxios.get(`${API_URL}searchUserName?nameSearch=${nameSearch}`)
}
export {editAccount, findById}