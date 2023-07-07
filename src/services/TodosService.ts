import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export interface ITodo {
    id: number
    title: string
    description: string
    completed: boolean
}

export interface PagiTodo {
    list: ITodo[]
    totalCount: number
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
        fetchPaginationTodos: build.query<PagiTodo, { page: number, limit: number, offset?: number }>({
            query: ({ page, limit }) => ({
                url: `/todos?_page=${page}&_limit=${limit}`
            }),
            transformResponse(list: ITodo[], meta) {
                return { list, totalCount: Number(meta?.response?.headers.get('X-Total-Count')) }
            },
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
    useDeleteTodoMutation,
    useFetchPaginationTodosQuery
} = todosAPI
