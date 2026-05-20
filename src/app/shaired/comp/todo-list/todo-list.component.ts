import { Component, Input, OnInit } from '@angular/core';
import { Itodo } from '../../modal/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  @Input() tododata !: Array<Itodo>
  constructor() { }

  ngOnInit(): void {
  }

  trackbyfun(index : number, item : Itodo){
    return item.todoId
  }

}
