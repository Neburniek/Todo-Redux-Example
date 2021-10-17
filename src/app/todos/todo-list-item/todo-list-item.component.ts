import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { TodoDTO } from '../models/todo.model';
import { completeTodo, deleteTodo, editTodo } from '../todo.actions';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {
  @Input() todo: TodoDTO = new TodoDTO("");
  titleInput: FormControl;
  isEditing: Boolean = false;

  constructor(private store: Store<AppState>) {
    this.titleInput = new FormControl(this.todo.title, Validators.required);

  }

  ngOnInit(): void {
    this.isEditing = false;
    this.titleInput = new FormControl(this.todo.title, Validators.required);

  }

  complete(): void {
    this.store.dispatch(completeTodo({ id: this.todo.id }));

  }
  edit(): void {
    this.isEditing = true;
  }

  delete(): void {
    this.store.dispatch(deleteTodo({ id: this.todo.id }));
  }

  submit(): void {
    if (!this.titleInput.invalid) {
      this.store.dispatch(editTodo({ id: this.todo.id, title: this.titleInput.value }))
      this.isEditing = false;

    }

  }

}
