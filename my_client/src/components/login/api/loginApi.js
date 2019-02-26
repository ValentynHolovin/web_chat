import axios from '../../axios'

const SIGN_IN_URL = "/login";


export const signIn = (user) => {
    let params = new URLSearchParams();
    params.append('login', user.login);
    params.append('password', user.password);
    return axios.post(SIGN_IN_URL, params)
        .then(response => {
            return response.data;
        })
};