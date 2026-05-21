import { Component, OnInit } from '@angular/core';
import { Itodo } from '../../modal/todo';
import { todoArr } from '../../consts/todo';
import { SnackBarService } from '../../service/todo.service';
@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.scss']
})
export class TodoDashboardComponent implements OnInit {
  constructor(
    private _snackBar:SnackBarService
  ) { }
  editTodoobj!:Itodo
  todoarr !: Array<Itodo>
  ngOnInit(): void {
    this.todoarr = todoArr
  }
  removeTodo(removeId:string){
    let getIndex = this.todoarr.findIndex(t =>t.todoId === removeId)
    console.log(getIndex);
    
    this.todoarr.splice(getIndex,1)
  }
  ontodonewobj(todo:Itodo){
todoArr.unshift(todo);
  }

  getEditTodo(edit:Itodo){
console.log(edit);
this.editTodoobj=edit
  }

  getUpdateTodo(updateId:Itodo){
 let getIndex=this.todoarr.findIndex(n => n.todoId === updateId.todoId)
 this.todoarr[getIndex]=updateId
 this._snackBar.opensanckBar(`The TodoItem with Id ${updateId.todoId}  Updateed  Successfully!!`)

  }
}
