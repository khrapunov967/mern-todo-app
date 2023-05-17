import { Todo } from "./data";

// Auth Service
export type isLoggedInFunction = () => Promise<boolean>;

// Todos Service
export type getAllTodosFunction = () => Promise<Todo[]>