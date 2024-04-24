import {baseUrl} from "./constanc";
import axios from "axios";

const getListColor = () => {
    return axios.get(`${baseUrl}/api/color`)
}
const getListSize = () => {
    return axios.get(`${baseUrl}/api/size`)
}
const getAllCategory = () => {
    return axios.get(`${baseUrl}/api/categories`)
}
export {getListColor, getListSize, getAllCategory}
