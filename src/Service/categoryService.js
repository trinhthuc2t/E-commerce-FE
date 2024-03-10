import axios from "axios";

const API_URL = `https://e-commerce-be-production.up.railway.app//api/categories`;
const getAllCategory = () => {
    return axios.get(API_URL)
}
export {getAllCategory};