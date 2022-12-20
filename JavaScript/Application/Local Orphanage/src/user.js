import { post, get } from "./api.js";
import { setUserData, clearUserData } from './util.js'

const endpoints = {
    loginUrl: '/users/login',
    registerUrl: '/users/register',
    logoutUrl: '/users/logout'
}

export async function login(email, password) {
    const {_id, email: resultEmail, accessToken} = await post(endpoints.loginUrl, {email, password});

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function register(email, password) {
    const {_id, email: resultEmail, accessToken} = await post(endpoints.registerUrl, {email, password});

    setUserData({
        _id,
        email: resultEmail,
        accessToken
    });
}

export async function logout() {
    get(endpoints.logoutUrl);
    clearUserData();
}