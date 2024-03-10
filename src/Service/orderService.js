import {tokenAxios} from "./axiosConfig";


const saveOrder = (accId,carts) => {

    return tokenAxios.post(`https://e-commerce-be-production.up.railway.app//api/order/save/${accId}`, carts)
}

export {saveOrder};



