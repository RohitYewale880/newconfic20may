import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Itodo } from '../../modal/todo';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {
  @ViewChild('todoItem') todoItem !: ElementRef;
  @ViewChild('isConfirm') isConfirm !: ElementRef;
  @Output() emitnewtodo: EventEmitter<Itodo> = new EventEmitter<Itodo>();
  todoArr: Array<Itodo> = [];
  constructor() { }

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
}
