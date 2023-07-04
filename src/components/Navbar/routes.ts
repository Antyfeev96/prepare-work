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
        title: 'createTask'
    },
    {
        url: '/tasks',
        title: 'tasksList'
    },
    {
        url: '/logout',
        title: 'logout'
    },

]
