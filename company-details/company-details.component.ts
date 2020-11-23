import { CompanyService } from 'src/app/services/company.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from 'src/app/models/Company';
import { AdminService } from 'src/app/services/admin.service';
import { CompanyDetails } from '../../models/CompanyDetails';
import { MatTable } from '@angular/material/table';
@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  
  companyDetails: CompanyDetails;
  companyDetail: Company={ 
    id : undefined,
    name:undefined,
    email: undefined,
    password: undefined
  };
  companyDetailses=[];
  dataSource: MatTableDataSource<any>;
  
  

  constructor(private companyService: CompanyService) { }

  ngOnInit(): void {
    this.companyService.getCompanyDetails().subscribe(
      (res) => {
        this.companyDetails = res;
        
        this.companyDetail.id= this.companyDetails.id;
        this.companyDetail.name= this.companyDetails.name;
        this.companyDetail.email= this.companyDetails.email;
        this.companyDetail.password= this.companyDetails.password;
        this.companyDetailses=[];
        this.companyDetailses.push(this.companyDetail);
        this.dataSource = new MatTableDataSource<any>(this.companyDetailses);
      },
      (err) => { alert(err.error) });
  }


  displayedColumns: string[] = ['id', 'name', 'email', 'password'];
  
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

}
