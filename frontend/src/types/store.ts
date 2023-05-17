import { Todo } from "./data"

export type todosSliceInitialState = {
    todos: Todo[];
    isFetching: boolean;
};