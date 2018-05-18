import { Component, OnInit } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  addAccount(accountname:string,accountstatus:string){
    alert("Inside component: " + accountname+' with a status of '+accountstatus)
    //I want to access AccountService by calling addAccount
    this.accountService.addAccount(accountname,accountstatus);


  }

}
