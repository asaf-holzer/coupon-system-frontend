import { getLocaleMonthNames } from '@angular/common';
import { LoginService } from './../../services/login.service';
import { TokenService } from './../../services/token.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { DialogBoxLogoutComponent } from '../dialog-box-logout/dialog-box-logout.component';
import { MatTable } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public flag = true;
  //dialog: any;
  constructor(private loginService:LoginService, private tokenService: TokenService, public dialog: MatDialog, private router: Router) { }

  ngOnInit(): void {
  }

 /*  flagIN(){
    this.flag=this.loginService.flag;
  } */

  public change(): boolean {
    this.flag=!this.flag;
    return this.flag;
  }

  public logout(){
    
      this.loginService.logout(this.tokenService.token).subscribe(
        (res)=>{ alert("thank you for use coupon system, see you again...")},
        (err)=>{alert("hard to leave")}
        );
      this.tokenService.token="0";
  }
  @ViewChild(MatTable, { static: true }) table: MatTable<any>;

  openDialog(action, obj) {
    
    obj.action = action;
    const dialogRef = this.dialog.open(DialogBoxLogoutComponent, 
      {
      width: '250px',
      data: obj
      });

    dialogRef.afterClosed().subscribe((result) => {
      if(this.loginService.toLogout){
        this.logout();
        this.router.navigate(['/home']);
      }
    });
  }
 
}
