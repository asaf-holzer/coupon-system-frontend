import { CompanyService } from 'src/app/services/company.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { DialogBox6Component } from '../dialog-box6/dialog-box6.component';
import { DialogBox7Component } from '../dialog-box7/dialog-box7.component';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

 public dialogRef;
  constructor(public dialog: MatDialog, private companyService:CompanyService, private router:Router) { }

  ngOnInit(): void {
  }

  openDialog(action, obj) {
    obj.action = action;
    if(action=='sort By Category'){
      this.dialogRef = this.dialog.open(DialogBox6Component, {
        width: '300px',
        data: obj
      });
    }else if(action=='sort By Max Price'){
      this.dialogRef = this.dialog.open(DialogBox7Component, {
        width: '300px',
        data: obj
      });
    }
    
    /* const dialogRef = this.dialog.open(DialogBox6Component, {
      width: '300px',
      
      data: obj
    }); */

    this.dialogRef.afterClosed().subscribe(result => {
     if(action=='sort By Category'){
       if(this.companyService.toSortCat){
      this.router.navigate(['company/get-company-coupons-category']);
       } 
     }else if(action=='sort By Max Price'){
      if(this.companyService.toSortMax){
      this.router.navigate(['company/get-company-coupons-max-price']);
      }
     }
        
     
      
      
    });
  }

}
