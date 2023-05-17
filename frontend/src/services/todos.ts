import { BASE_API_URL } from "../utils/constants";
import * as types from "../types/functions";
import axios from "axios";

export class Todos {
    static getAllTodos: types.getAllTodosFunction = async () => {
        const response = await axios.get(`${BASE_API_URL}/api/todo/all`);
        return response.data;
    }
};