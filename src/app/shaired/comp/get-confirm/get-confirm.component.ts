import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-get-confirm',
  templateUrl: './get-confirm.component.html',
  styleUrls: ['./get-confirm.component.scss']
})
export class GetConfirmComponent implements OnInit {

  getMsg:string=''
  constructor(private _dailogRef:MatDialogRef<GetConfirmComponent>,
  @Inject(MAT_DIALOG_DATA)msg:string
  ) {
    this.getMsg=msg
   }

  ngOnInit(): void {
  }

  onDelete(flag:boolean){
    this._dailogRef.close(flag)
  }
}
