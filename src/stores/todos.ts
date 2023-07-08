import {makeAutoObservable} from 'mobx';
import {fetchTodos} from "../api/todos.ts";
import {fromPromise, IPromiseBasedObservable} from "mobx-utils";

export interface Todo {
    id: number
    title: string
    completed: boolean
}

class Todos {
    todos?: IPromiseBasedObservable<Todo[]>

    constructor() {
        makeAutoObservable(this)
    }

    getTodos = () => {
        this.todos = fromPromise(fetchTodos())
    }
}

export default new Todos()
