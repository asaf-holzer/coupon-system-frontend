/* import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-box2',
  templateUrl: './dialog-box2.component.html',
  styleUrls: ['./dialog-box2.component.css']
})
export class DialogBox2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

} */

import { Company } from './../../models/Company';
import { Component, Inject, Optional } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

export interface UsersData {
 
  id: number;
  name: string;
  email: string;
  password: string;
}


@Component({
  selector: 'app-dialog-box2',
  templateUrl: './dialog-box2.component.html',
  styleUrls: ['./dialog-box2.component.css']
})
export class DialogBox2Component {

  email = new FormControl('', [Validators.required, Validators.email]);
  first = new FormControl('', [Validators.required, Validators.pattern('^[A-Z].*$')]);
  last = new FormControl('', [Validators.required, Validators.pattern('^[A-Z].*$')]);
  pass = new FormControl('', [Validators.required, Validators.minLength(4)]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessageFirst() {
    if (this.first.hasError('required')) {
      return 'You must enter a value';
    }

    return this.first.hasError('pattern') ? 'must start with capital letter' : '';
  }

  getErrorMessageLast() {
    if (this.last.hasError('required')) {
      return 'You must enter a value';
    }

    return this.last.hasError('pattern') ? 'must start with capital letter' : '';
  }

  getErrorMessagePass() {
    if (this.pass.hasError('required')) {
      return 'You must enter a value';
    }

    return this.pass.hasError('minLength') ? 'Not a valid email' : '';
  }



  action:string;
  local_data:any;

  constructor(
    public dialogRef: MatDialogRef<DialogBox2Component>,
    //@Optional() is used to prevent error if no data is passed
    @Optional() @Inject(MAT_DIALOG_DATA) public data: UsersData) {
    console.log(data);
    this.local_data = {...data};
    console.log(this.local_data.firstName+"TEST!!!!!!!!!!!!!!!!!!!!!!");
    this.action = this.local_data.action;
  }

  doAction(){
   this.dialogRef.close({event:this.action , data:this.local_data,});
  }

  closeDialog(){
    this.dialogRef.close({event:'Cancel'});
  }

}

