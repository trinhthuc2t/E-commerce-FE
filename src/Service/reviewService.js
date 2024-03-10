import axios from "axios";

const API_URL = `http://localhost:8080/api/reviews`;

const getReviewByProductId = (id)=>{
    return axios.get(`${API_URL}/${id}`)
}
const avgRate = (id)=>{
    return axios.get(`${API_URL}/${id}/avgRate`)
}
export {getReviewByProductId, avgRate}
