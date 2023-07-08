import axios from "axios";
import {Todo} from "../stores/todos.ts";

const instance = axios.create({
    baseURL: 'http://localhost:8080',
});

export const fetchTodos = async () => (await instance.get<Todo[]>('/todos')).data
