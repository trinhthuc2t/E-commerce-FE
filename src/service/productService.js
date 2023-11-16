import axios from "axios";

const API_URL = `http://localhost:8080/api/products`;

const getAllProducts = () => {
    return axios.get(API_URL)
}
export{getAllProducts};