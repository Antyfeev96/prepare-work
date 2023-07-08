import {action, computed, makeAutoObservable, makeObservable, observable} from 'mobx';

class Todos {
    todos = []

    get totalCount() {
        return this.todos.length
    }

    constructor() {
        // makeObservable(this, {
        //     todos: observable,
        //     setTodos: action,
        //     resetTodos: action,
        //     totalCount: computed
        // })
        makeAutoObservable(this)
    }
    setTodos = (todos) => {
        this.todos = todos
    }

    resetTodos = () => {
        this.todos = []
    }
}

export default new Todos()
