import { Todo } from "./data"

export type todosSliceInitialState = {
    todos: Todo[];
    isFetching: boolean;
};

export type userSliceInitialState = {
    name: string;
    email: string;
    isFetching: boolean;
};