import { Component, ElementRef, EventEmitter, OnInit, Output,Input, ViewChild, OnChanges, SimpleChanges } from '@angular/core';
import { Itodo } from '../../modal/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit,OnChanges {
  @ViewChild('todoItem') todoItem !: ElementRef;
  @ViewChild('isConfirm') isConfirm !: ElementRef;
  isInEditMode:boolean=false
  @Input() getEditobj!:Itodo
  @Output() emitnewtodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  @Output() emitUpdateTodo: EventEmitter<Itodo> =new EventEmitter<Itodo>()
  todoArr: Array<Itodo> = [];
  constructor() { }


ngOnChanges(changes: SimpleChanges): void {
  console.log(changes);
   if(!!changes['getEditobj'].currentValue){
    this.isInEditMode=true
    this.todoItem.nativeElement.value=this.getEditobj.todoItem;
    this.isConfirm.nativeElement.value=this.getEditobj.isConfirm;
  }
  

}


  ngOnInit(): void {
  }
  addTodoform() {
    let newtodoObj: Itodo = {
      todoItem: this.todoItem.nativeElement.value,
      isConfirm: this.isConfirm.nativeElement.value === 'true',
      todoId: Date.now().toString()
    }
    console.log(newtodoObj);
    this.emitnewtodo.emit(newtodoObj);
    this.todoItem.nativeElement.value='';
    this.isConfirm.nativeElement.value='';
  }
  
onUpdateTodo(){
    let UpdateObj:Itodo={
   todoItem : this.todoItem.nativeElement.value,
  isConfirm: this.isConfirm.nativeElement.value,
  todoId : this.getEditobj.todoId
    }

    console.log(UpdateObj);
    this.emitUpdateTodo.emit(UpdateObj)
    this.todoItem.nativeElement.value=''
    this.isConfirm.nativeElement.value=''
     this.isInEditMode=false
    
  

  }


}
