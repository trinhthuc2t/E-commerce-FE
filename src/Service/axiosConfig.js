import axios from "axios";
const tokenAxios = axios.create({
baseURL: 'https://e-commerce-be-production.up.railway.app/'
})
tokenAxios.interceptors.request.use(config => {
    const account = JSON.parse(localStorage.getItem("account"));
    if (account && account.token){
        config.headers.Authorization = `Bearer ${account.token}`;
    }
    return config;
})
export {tokenAxios};