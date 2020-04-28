import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles:[`

    .online{
        color:white;
    }
    `]
})
export class ServersComponent implements OnInit {
userName = "";
serverCreated =false;
serverName = 'testServer';
servers =[];

  constructor() { 
    
  }

  ngOnInit(): void {
  }

  onClick(){
    this.serverCreated = true;
    this.servers.push(this.servers.length + 1);
  }

  getColor(){
    return this.servers.length > 5 ? 'blue':'red';
  }

  getClass(){
    return this.servers.length > 5 ? 'online':'';
  }
}
