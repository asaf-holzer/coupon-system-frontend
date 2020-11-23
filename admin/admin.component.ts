import { AdminService } from './../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/Company';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogBox5Component } from '../dialog-box5/dialog-box5.component';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  dataSource: MatTableDataSource<Company>;
  company:Company;
  companies:[] ;
  

 public constructor(public dialog: MatDialog, adminService:AdminService, private router:Router) { }

  ngOnInit(): void {
    
  }

  
  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBox5Component, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'getCompany') {
        this.router.navigate(['admin/getOneCompany']); 
      } else if (result.event == 'getCustomer') {
        this.router.navigate(['admin/getOneCustomer']) 
      }

    });
  }
  
}
