import { TodoDTO } from "./todos/models/todo.model";

export interface AppState {
    todos: TodoDTO[];
}