import axios from "axios";

const API_URL = `https://e-commerce-be-production.up.railway.app/api/reviews`;

const getReviewByProductId = (id)=>{
    return axios.get(`${API_URL}/${id}`)
}
const avgRate = (id)=>{
    return axios.get(`${API_URL}/${id}/avgRate`)
}
export {getReviewByProductId, avgRate}
