import { BASE_API_URL } from "../utils/constants";
import * as types from "../types/functions";
import axios from "axios";

export class Auth {
    static isLoggedIn: types.isLoggedInFunction = async () => {
        const response = await axios.get(`${BASE_API_URL}/api/auth/is-logged-in`, {
            withCredentials: true
        });
        return response.data;
    };

    static signIn = async (user: {email: string; password: string}) => {
        await axios.post(`${BASE_API_URL}/api/auth/sign-in`, user, {
            withCredentials: true
        });
    };

    static logout = async () => {
        await axios.get(`${BASE_API_URL}/api/auth/logout`, {
            withCredentials: true
        });
    };
};