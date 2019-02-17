import axios from '../../axios'

const SIGN_IN_URL = "/login";

export const signIn = (user) => {
    return axios.post(SIGN_IN_URL, user)
        .then(response => {
            return response.data;
        })
};