import { Company } from 'src/app/models/Company';
import { Component, OnInit } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MAT_FORM_FIELD } from '@angular/material/form-field';
import { from } from 'rxjs';
import { AdminService } from 'src/app/services/admin.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css']
})


export class CompanyListComponent implements OnInit {

  public companies = [];
  public companyID: number;
  public company: Company;
  public constructor(private adminService: AdminService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.adminService.getAllCompanies().subscribe(
      (res) => {
        this.companies = res;
        console.log(res);
        this.dataSource = new MatTableDataSource<Company>(this.companies);
      },
      (err) => { alert(err.error) });
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'password', 'update', 'delete'];
  dataSource = new MatTableDataSource(this.companies);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  public addCompany(obj): void {
    this.adminService.addCompany(obj).subscribe(
      (res)=>{this.companies.push(res),
        this.adminService.getAllCompanies().subscribe(
          (res) => {
            this.companies = res;
            this.dataSource = new MatTableDataSource<Company>(this.companies);
          },
          (err) => { alert(err.error) });},
      (err)=>{ alert(err.error) });
     
  }

  public deleteCompany(obj): void {
    this.adminService.deleteCompany(obj.id).subscribe(
      (res) => { this.companyID = res },
      (err) => { alert(err.error) });
    this.companies = this.companies.filter((value) => {
      return value.id != obj.id;
    });
    this.dataSource = new MatTableDataSource<Company>(this.companies);
  }

  public updateCompany(obj): void {

    this.adminService.updateCompany(obj.id, obj).subscribe(
      (res) => {
        this.company = res,
        this.adminService.getAllCompanies().subscribe(
          (res) => {
            this.companies = res;
            this.dataSource = new MatTableDataSource<Company>(this.companies);
          },
          (err) => { alert(err.error) });
      },
      (err) => { alert(err.error) });


  }
  /* ******************************************************************************************************* */
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;



  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == 'Add') {
        this.addCompany(result.data);
      } else if (result.event == 'Update') {
        this.updateCompany(result.data);
      } else if (result.event == 'Delete') {
        this.deleteCompany(result.data);
      }
    });
  }

 
}


