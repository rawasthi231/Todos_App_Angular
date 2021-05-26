import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Comp1Component } from './myComponents/comp1/comp1.component';
import { HeaderComponent } from './myComponents/header/header.component';
import { TodoItemComponent } from './myComponents/todo-item/todo-item.component';
import { AddTodoComponent } from './myComponents/add-todo/add-todo.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Comp1Component,
    HeaderComponent,
    TodoItemComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
