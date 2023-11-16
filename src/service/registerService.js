import axios from "axios";



class RegisterService {
    static register(account){
        return axios.post("http://localhost:8080/api/accounts/register", account)
    }
    static checkUsername(username){
        return axios.get("http://localhost:8080/api/accounts/check-username?username=" + username)
    }
    static checkEmail(email){
        return axios.get("http://localhost:8080/api/accounts/check-email?email=" + email)
    }
}

export default RegisterService;