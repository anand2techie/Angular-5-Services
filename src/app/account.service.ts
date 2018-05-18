import { Injectable } from '@angular/core';
import { EventEmitter } from 'protractor';

@Injectable()
export class AccountService {

  constructor() { }

  accounts = [
    {
        name: 'Master Account',
        status: 'active'
    },
    {
        name: 'Testaccount',
        status: 'inactive'
    },
    {
        name: 'Hidden Account',
        status: 'unknown'
    },
    {
        name: 'New Account #1',
        status: 'inactive'
    }
];

accountUpdated:EventEmitter;

updateAccount(ind,accountname,accountstatus){
    alert('update accout called... '+accountname+' '+accountstatus+' '+ind);
    this.accounts[ind].name=accountname;
    this.accounts[ind].status=accountstatus;
}

addAccount(accountname:string,accountstatus:string){
  alert("Inside service: "+accountname+ ' '+accountstatus)
  this.accounts.push({name:accountname,status:accountstatus});
}

}
