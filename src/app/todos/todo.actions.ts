import { createAction, props } from "@ngrx/store";


export const createTodo = createAction(
    "[TODO] create todo", props<{ title: string }>()
);

export const completeTodo = createAction("[TODO] complete todo", props<({ id: number })>());

export const editTodo = createAction("[TODO] Edit todo", props<({ id: number, title: string })>());

export const deleteTodo = createAction("[TODO] Delete todo", props<({ id: number })>());