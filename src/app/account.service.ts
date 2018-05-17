import { Injectable } from '@angular/core';

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

updateAccount(){

}

addAccount(){
  
}

}
