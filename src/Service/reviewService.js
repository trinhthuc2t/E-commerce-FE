import axios from "axios";
import {baseUrl} from "./constanc";

const API_URL = `${baseUrl}/api/reviews`;

const getReviewByProductId = (id)=>{
    return axios.get(`${API_URL}/${id}`)
}
const avgRate = (id)=>{
    return axios.get(`${API_URL}/${id}/avgRate`)
}
export {getReviewByProductId, avgRate}
