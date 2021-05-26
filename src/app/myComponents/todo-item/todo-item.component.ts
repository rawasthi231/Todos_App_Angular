import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {

  // input decorator
  @Input() todo : Todo = {sno:0, title:"", desc:"", active:false};
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }
  
  onDelete(todo:Todo){
    this.todoDelete.emit(todo);
  }

  onCheck(todo:Todo){
    //console.log(todo);
    this.todoCheckBox.emit(todo)
  }

}

