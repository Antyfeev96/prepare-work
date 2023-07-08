interface Routes {
    url: string
    title: string
}

export const routes: Routes[] = [
    {
        url: '/home',
        title: 'home'
    },
    {
        url: '/create',
        title: 'createTodo'
    },
    {
        url: '/todos',
        title: 'todoList'
    },
    {
        url: '/logout',
        title: 'logout'
    },

]
