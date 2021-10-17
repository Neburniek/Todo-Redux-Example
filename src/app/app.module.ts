import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoModule } from './todos/todo/todo.module';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todos/todo.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
// import { TodoListComponent } from './todos/todo-list/todo-list.component';
// import { TodoListItemComponent } from './todos/todo-list-item/todo-list-item.component';
// import { TodoAddComponent } from './todos/todo-add/todo-add.component';

@NgModule({
  declarations: [
    AppComponent
    // ,
    // TodoListComponent,
    // TodoListItemComponent,
    // TodoAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoModule,
    StoreModule.forRoot({ todos: todoReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
