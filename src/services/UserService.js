import axios from 'axios'

class UserService {
    constructor(){
        this.baseUrl = `localhost:8080`
    }
    testAxios(){
       return axios
            .get('https://api.coindesk.com/v1/bpi/currentprice.json')
            .then(response => (alert(JSON.stringify(response.data.bpi))));
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
}
export default new UserService();