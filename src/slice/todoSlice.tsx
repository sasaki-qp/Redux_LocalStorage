import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../app/store"

type InitialStateType = {
    todo: Todo,
}

export type Todo = {
    id: number,
    title: string,
    isSelected: boolean,
}

const initialState: InitialStateType = {
    todo: {
        id: 0,
        title: "",
        isSelected: true,
    }
}

export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        selectTodo: (state, action: PayloadAction<Todo>) => {
            state.todo = action.payload;
        },
        resetTodo: (state) => {
            state.todo = initialState.todo
        },
        toggleTodo: (state, action: PayloadAction<Todo>) => {
            state.todo.id === action.payload.id
            ? state.todo = initialState.todo
            : state.todo = action.payload;
        },
    }
})

export const SelectedTodo = (state: RootState) => state.todo.todo;
export const { selectTodo, resetTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;