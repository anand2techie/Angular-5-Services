import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css']
})
export class NewAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addAccount(accoutname:string,accountstatus:string){
    alert(accoutname+' with a status of '+accountstatus)
  }

}
