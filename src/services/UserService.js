import axios from 'axios'
const dotenv = require('dotenv');
dotenv.config();

class UserService {
    constructor(){
        this.baseUrl = `localhost:${process.env.PORT}`
    }
    signUp(firstname,lastname,email,password){
           return axios
            .post(`//${this.baseUrl}/user/signup`, {
                params: {
                    firstname: firstname,
                    lastname: lastname,
                    email: email,
                    password: password
                }
            })
    }
    login(email,password){
        return axios
            .post(`//${this.baseUrl}/user/login`, {
                params: {
                    email: email,
                    password: password
                }
            })
    }
    getAllUsers(){
         return axios.get(`//${this.baseUrl}/user/all`,{
            headers:{
                'Content-Type': 'application/json'
            }
        })
    }
}
export default new UserService();