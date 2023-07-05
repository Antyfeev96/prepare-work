import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/dist/query/react';

export interface ITask {
    id: number
    title: string
    description: string
    completed: boolean
}

export const tasksAPI = createApi({
    reducerPath: 'tasksAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    tagTypes: ['Task'],
    endpoints: (build) => ({
        fetchAllTasks: build.query<ITask[], null>({
            query: () => ({
                url: '/tasks'
            }),
            providesTags: ['Task']
        }),
        createTask: build.mutation<ITask, ITask>({
            query: (task) => ({
                url: '/tasks',
                method: 'POST',
                body: task
            }),
            invalidatesTags: ['Task'],
        }),
        updateTask: build.mutation<ITask, { id: number, completed: boolean }>({
            query: ({id, completed}) => ({
                url: `/tasks/${id}`,
                method: 'PATCH',
                body: {
                    completed
                }
            }),
            invalidatesTags: ['Task'],
        }),
        deleteTask: build.mutation<ITask, number>({
            query: (id) => ({
                url: `/tasks/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Task'],
        }),
    })
})

export const {useFetchAllTasksQuery, useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation} = tasksAPI
