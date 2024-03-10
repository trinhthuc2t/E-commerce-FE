import axios from "axios";



class loginAndRegisterService {
    static login(account){
        return axios.post("https://e-commerce-be-production.up.railway.app//api/login", account)
    }
    static register(account){
        return axios.post("https://e-commerce-be-production.up.railway.app//api/accounts/register", account)
    }
    static checkUsername(username){
        return axios.get("https://e-commerce-be-production.up.railway.app//api/accounts/check-username?username=" + username)
    }
    static checkEmail(email){
        return axios.get("https://e-commerce-be-production.up.railway.app//api/accounts/check-email?email=" + email)
    }
}

export default loginAndRegisterService;