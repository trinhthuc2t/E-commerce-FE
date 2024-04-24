import axios from "axios";
import {baseUrl} from "./constanc";



class loginAndRegisterService {
    static login(account){
        return axios.post(`${baseUrl}/api/login`, account)
    }
    static register(account){
        return axios.post(`${baseUrl}/api/accounts/register`, account)
    }
    static checkUsername(username){
        return axios.get(`${baseUrl}/api/accounts/check-username?username=` + username)
    }
    static checkEmail(email){
        return axios.get(`${baseUrl}/api/accounts/check-email?email=` + email)
    }
}

export default loginAndRegisterService;
