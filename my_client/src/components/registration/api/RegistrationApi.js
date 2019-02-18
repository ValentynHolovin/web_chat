import axios from '../../axios'

const SIGN_UP_URL = "/registration";

export const signUp = (user) => {
    return axios.post(SIGN_UP_URL, user)
        .then(response => {
            return response.data;
        })
};