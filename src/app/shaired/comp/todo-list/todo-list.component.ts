import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Itodo } from '../../modal/todo';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  
  @Output() removeTodo: EventEmitter<string>=new EventEmitter<string>()
  @Output() emitEditTodo: EventEmitter<Itodo>=new EventEmitter<Itodo>()

  @Input() tododata !: Array<Itodo>
  constructor(private _Dailoge:MatDialog) { }

  ngOnInit(): void {
    
  }

  onEditTodo(todo:Itodo){
    console.log(todo);
    this.emitEditTodo.emit(todo)
    
  }


  onRemove(id:string){
    let config=new MatDialogConfig()
    config.width="300px"
    config.disableClose=true
    config.data=`Are Sure YOU Want to Delete ${id}`
    let close=this._Dailoge.open(GetConfirmComponent,config)
    close.afterClosed().subscribe((isc: boolean)=>{
      if(isc===true){
        this.removeTodo.emit(id)
        console.log(id);
        
      }
    })
  }

  trackbyfun(index : number, item : Itodo){
    return item.todoId
  }
  
}