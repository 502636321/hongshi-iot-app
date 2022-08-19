import axios from 'axios'

export function login(parameter) {
    return axios.post('https://api.fshongshi.com/jetlinks/authorize/login', {
        "username": parameter.username,
        "password": parameter.password,
        "expires":3600000,
        "tokenType":"default",
        "verifyKey":"",
        "verifyCode":""
    }).then(resp => resp.data);
}
