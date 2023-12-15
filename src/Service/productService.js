import axios from "axios";

const API_URL = `http://localhost:8080/api/products`;

const getAllProducts = () => {
    return axios.get(API_URL)
}

const getAllImageByProductId = (id) => {
    return axios.get(`http://localhost:8080/api/image/${id}`)
}

const getAllProductsByCategoryId = (id) => {
    return axios.get(`${API_URL}/category/${id}`)
}

const getProductById = (id) => {
    return axios.get(`${API_URL}/${id}`)
}
const getProductByAll = (nameSearch, minPrice, maxPrice, colorName, sizeName, page, sort, direction) => {
    return axios.get(`${API_URL}/search-all?nameSearch=${nameSearch}&minPrice=${minPrice}&maxPrice=${maxPrice}&colorName=${colorName}&sizeName=${sizeName}&page=${page}&sort=${sort}&direction=${direction}`)
}
export {getAllProducts, getAllProductsByCategoryId, getProductById, getAllImageByProductId, getProductByAll};