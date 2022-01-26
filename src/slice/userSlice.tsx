import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store";

type InitialStateType = {
    user: User
}

export type User = {
    id: number,
    age: number,
    name: string,
}

const initialState: InitialStateType = {
    user: {
        id: 0,
        age: 0,
        name: "",
    }
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser:(state, action: PayloadAction<User>) => {
            state.user = action.payload;
        },
        resetUser: (state) => {
            state.user = initialState.user;
            localStorage.removeItem("user")
        },
    }
})

export const SelectedUser = (state: RootState) => state.user.user;
export const { setUser, resetUser } = userSlice.actions;
export default userSlice.reducer;