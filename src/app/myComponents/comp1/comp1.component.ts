import { Component, OnInit } from '@angular/core';
import { Todo } from "../../Todo";
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  heading = 'Heading';
  todos:Todo[] = [];
  localItems:string = "";
  constructor() {
    this.localItems = localStorage.getItem("todos") || "";
    if(this.localItems == ""){
      this.todos = [];
    } else {
      this.todos = JSON.parse(this.localItems);
    }
    
    setTimeout(() => {
      this.heading = "Todos List"
    }, 500)
  }
  ngOnInit(): void {
  }

  deleteTodo(todo:Todo){
    let index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);
    localStorage.setItem("todos", JSON.stringify(this.todos)); 
  }

  addTodo(todo:Todo){
    this.todos.push(todo); 
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  toggleTodo(todo:any){
    let index = this.todos.indexOf(todo);
    this.todos[index].active = !this.todos[index].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

}
