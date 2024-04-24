import {tokenAxios} from "./axiosConfig";
import {baseUrl} from "./constanc";


const saveOrder = (accId,carts) => {
    return tokenAxios.post(`${baseUrl}api/order/save/${accId}`, carts)
}

export {saveOrder};



