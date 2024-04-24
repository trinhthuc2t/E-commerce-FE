import axios from "axios";
import {baseUrl} from "./constanc";

const API_URL = `${baseUrl}/api/message/`;


const getMesById = (idSend, idRec) => {
    console.log(`${API_URL}${idSend}/${idRec}`)
    return axios.get(`${API_URL}${idSend}/${idRec}`)
}
const  saveMes = (message) => {
    return axios.post(`${API_URL}message`, message)
}
const  getMesByAccId = (id) => {
    console.log(`${API_URL}account/${id}/mes`)
    return axios.get(`${API_URL}account/${id}/mes`)
}


export {
    getMesById, saveMes, getMesByAccId
};
