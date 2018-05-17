import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  accounts: { name: string, status: string }[] = [];

  ngOnInit(): void {
    //accessing the accounts array from AccountService and am assigning to this array
    this.accounts=this.accountService.accounts;
  }
  title = 'app';

  //dependency injection - will be taken care by Angular
  constructor(private accountService:AccountService){

  }

}
