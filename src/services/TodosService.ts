import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export interface ITodo {
    id: number
    title: string
    description: string
    completed: boolean
}

export const todosAPI = createApi({
    reducerPath: 'todosAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    tagTypes: ['Todo'],
    endpoints: (build) => ({
        fetchAllTodos: build.query<ITodo[], null>({
            query: () => ({
                url: '/todos'
            }),
            providesTags: ['Todo']
        }),
        createTodo: build.mutation<ITodo, Partial<ITodo>>({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo
            }),
            invalidatesTags: ['Todo'],
        }),
        updateTodo: build.mutation<ITodo, { id: number, completed: boolean }>({
            query: ({id, completed}) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
                body: {
                    completed
                }
            }),
            invalidatesTags: ['Todo'],
        }),
        deleteTodo: build.mutation<ITodo, number>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Todo'],
        }),
    })
})

export const {
    useFetchAllTodosQuery,
    useCreateTodoMutation,
    useUpdateTodoMutation,
    useDeleteTodoMutation
} = todosAPI
