import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() account: { name: string, status: string };

  //@Input() will enable property binding from one component to another component
  @Input() ind:string;

  constructor(private accountService:AccountService) { }

  ngOnInit() {
  }

  updateAccount(accountname:string,accountstatus:string){
    alert(accountname+" "+accountstatus);
    this.accountService.updateAccount(this.ind,accountname,accountstatus);
    //this.accountService.accountUpdated.emit(accountname,accountstatus);
  }

}
