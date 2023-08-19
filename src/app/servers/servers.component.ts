import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent {
  userName='';
  allowNewServer = false;
  serverCreationStatus = 'No server created!';
  serverName = 'Test server';
  serverCreated = false;
  servers = ['Test server','Test server2'];
  constructor(){
    setTimeout(() => {
      this.allowNewServer=true;
    },2000);
  }

  ngOnIt(){
    
  }

  onCreateServer(){
    this.serverCreated=true;
    this.servers.push(this.serverName);
    console.log("onCreateServer called: "+this.serverCreationStatus);
    this.serverCreationStatus='Server was created! with name:'+this.serverName;
  }

  onUpdateServer(event:Event){
    console.log(event);
    //this.serverCreationStatus='Server was created!';
    this.serverName=(<HTMLInputElement>event.target).value;
  }

  onRemoveServer(id:number){
    const position  = id + 1;
    console.log("position: "+position);
    this.servers.splice(position,1);
  }
}
