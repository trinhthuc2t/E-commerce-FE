import {tokenAxios} from "./axiosConfig";
import {baseUrl} from "./constanc";

const API_URL = `${baseUrl}/api/accounts/`;
const editAccount = (idAccount, account) => {
    return tokenAxios.put(`${API_URL}edit/${idAccount}`, account)
}
const findById = (nameSearch) => {
    console.log(`${API_URL}searchUserName?nameSearch=${nameSearch}`)
    return tokenAxios.get(`${API_URL}searchUserName?nameSearch=${nameSearch}`)
}
export {editAccount, findById}
