import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface TodosState {
    page: number
    limit: number
    title_like: string
}

const initialState: TodosState = {
    page: 1,
    limit: 10,
    title_like: '',
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setPage(state, action: PayloadAction<number>) {
            state.page = action.payload
        },
        setLimit(state, action: PayloadAction<number>) {
            state.limit = action.payload
        },
        setQueryString(state, action: PayloadAction<string>) {
            state.title_like = action.payload
        }
    }
})

export const { setPage, setLimit, setQueryString } = todosSlice.actions
export default todosSlice.reducer
