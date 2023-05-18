import { Todo, User } from "./data";

// Auth Service
export type isLoggedInFunction = () => Promise<boolean>;

// Todos Service
export type getAllTodosFunction = () => Promise<Todo[]>;

// User Service
export type getUserInfoFunction = () => Promise<User>;