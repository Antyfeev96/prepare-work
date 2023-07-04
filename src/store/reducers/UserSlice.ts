import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface UserState {
    username: string | null
}

const initialState: UserState = {
    username: '',
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action: PayloadAction<string>) {
            state.username = action.payload
        },
        logout(state) {
            state.username = null
        }
    }
})

export default userSlice.reducer
