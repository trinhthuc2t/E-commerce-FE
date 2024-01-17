import axios from "axios";

const API_URL = `http://localhost:8080/api/products`;

const getAllProducts = () => {
    return axios.get(API_URL)
}

const getAllImageByProductId = (id) => {
    return axios.get(`http://localhost:8080/api/image/${id}`)
}

const getProductsByOwner = (id, colorId, sizeId,nameSearch, page) => {
    return axios.get(`${API_URL}/by-owner/${id}?colorId=${colorId}&sizeId=${sizeId}&nameSearch=${nameSearch}&page=${page}`)
}

const getAllProductsByCategoryId = (id) => {
    return axios.get(`${API_URL}/category/${id}`)
}

const getProductById = (id, colorId, sizeId) => {
    return axios.get(`${API_URL}/${id}?colorId=${colorId}&sizeId=${sizeId}`)
}
const getProductByAll = (nameSearch, minPrice, maxPrice, colorId, sizeId, page, sort, direction) => {
    return axios.get(`${API_URL}/search-all?nameSearch=${nameSearch}&minPrice=${minPrice}&maxPrice=${maxPrice}&colorId=${colorId}&sizeId=${sizeId}&page=${page}&sort=${sort}&direction=${direction}`)
}
export {
    getAllProducts,
    getAllProductsByCategoryId,
    getProductById,
    getAllImageByProductId,
    getProductByAll,
    getProductsByOwner
};