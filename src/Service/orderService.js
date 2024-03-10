import {tokenAxios} from "./axiosConfig";


const saveOrder = (accId,carts) => {

    return tokenAxios.post(`http://localhost:8080/api/order/save/${accId}`, carts)
}

export {saveOrder};



