import { BASE_API_URL } from "../utils/constants";
import * as types from "../types/functions";
import axios from "axios";

export class Todos {
    static getAllTodos: types.getAllTodosFunction = async () => {
        const response = await axios.get(`${BASE_API_URL}/api/todo/all`, {
            withCredentials: true
        });
        return response.data;
    };

    static createTodo = async (todo: {title: string; completed: boolean}) => {
        await axios.post(`${BASE_API_URL}/api/todo/`, todo, {
            withCredentials: true
        })
    }
};