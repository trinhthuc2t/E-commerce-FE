import axios from "axios";
import {baseUrl} from "./constanc";
const tokenAxios = axios.create({
baseURL: `${baseUrl}`
})
tokenAxios.interceptors.request.use(config => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account && account.token){
        config.headers.Authorization = `Bearer ${account.token}`;
    }
    return config;
})
export {tokenAxios};
