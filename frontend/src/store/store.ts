import { configureStore } from "@reduxjs/toolkit";
import todos from "./slices/todos";
import user from "./slices/user";

const store = configureStore({
    reducer: {
        todos,
        user
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;