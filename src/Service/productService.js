import axios from "axios";
import {baseUrl} from "./constanc";

const API_URL = `${baseUrl}/api/products`;

const getAllProducts = () => {
    return axios.get(API_URL)
}

const getAllImageByProductId = (id) => {
    return axios.get(`${baseUrl}/api/image/${id}`)
}

const getProductsByOwner = (id, nameSearch, page) => {
    return axios.get(`${API_URL}/by-owner/${id}?nameSearch=${nameSearch}&page=${page}`)
}
const saveProductByShop = (id, data) => {
    console.log('service', id, data)
    return axios.post(`${API_URL}/create/${id}`, data)
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
    getProductsByOwner,
    saveProductByShop
};
