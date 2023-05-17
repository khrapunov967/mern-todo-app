import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { todosSliceInitialState } from "../../types/store";
import { Todos } from "../../services/todos";

export const fetchTodos = createAsyncThunk(
    "todos/fetchTodos",
    async () => {
        const todos = await Todos.getAllTodos();
        return todos;
    }
);

const initialState: todosSliceInitialState = {
    todos: [],
    isFetching: false
};

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTodos.pending, (state) => {
                state.isFetching = true
            })
            .addCase(fetchTodos.fulfilled, (state, action) => {
                state.todos = action.payload;
                state.isFetching = false;
            }).
            addCase(fetchTodos.rejected, (state) => {
                state.isFetching = false;
                state.todos = [];
            })
    }
});

export default todosSlice.reducer;