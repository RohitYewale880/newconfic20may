import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../modal/todo';
import { todoArr } from '../../consts/todo';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {

  constructor() { }
  todoarr !: Array<Itodo>
  ngOnInit(): void {
    this.todoarr = todoArr
  }
  ontodonewobj(todo:Itodo){
todoArr.unshift(todo);

  }

}
