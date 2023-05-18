import { BASE_API_URL } from "../utils/constants";
import * as types from "../types/functions";
import axios from "axios";

export class User {
    static getUserInfo: types.getUserInfoFunction = async () => {
        const response = await axios.get(`${BASE_API_URL}/api/user/me`, {
            withCredentials: true
        });

        console.log(response.data);
        return response.data;
    };
};
