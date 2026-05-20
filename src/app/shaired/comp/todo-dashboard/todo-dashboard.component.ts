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
  
  remove(removeId:string){
    let getIndex = this.todoarr.findIndex(t =>t.todoId === removeId)

    this.todoarr.splice(getIndex,1)
  }


}
