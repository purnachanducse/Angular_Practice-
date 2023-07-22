import { Component } from '@angular/core';

@Component({
  selector:'app-server',
  templateUrl:'./server.component.html',
  styles:['.customClass {color: white;}']
})
export class ServerComponent{
 serverId: number = 10;
 serverStatus: string = 'offline';
 randomNum = 0;

 constructor(){
   this.randomNum = Math.random();
   console.log("random num: "+this.randomNum);
   this.serverStatus = this.randomNum > 0.5 ? 'online' : 'offline'; 
 }

 getServerStatus(){
  
   return this.serverStatus = this.serverStatus;
 }
 getColor(){
  return this.serverStatus ===  'online'?'green':'red';
 }
}
