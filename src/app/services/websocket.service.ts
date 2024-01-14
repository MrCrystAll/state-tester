import { Injectable } from '@angular/core';
import { Subject, lastValueFrom } from 'rxjs';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private open: boolean = false;
  messages: Subject<any> = new Subject<any>();
  status: Subject<boolean> = new Subject<boolean>();

  constructor(private socket: Socket){
    //this.socket$.on("open", () => this._setupListeners())
  }

  private _setupListeners(){
    this.socket.on("listening", (data: any) => this.handleReceive(data));
    this.socket.on("close", () => this._handleClose())
    this.open = true;
    this.status.next(this.open);
  }

  private _handleClose(){
    this.open = false;
    this.status.next(this.open);
  }

  handleReceive(data: any){
    console.log(data);
    this.messages.next(data);
  }

  async sendMessage(msg: any) {
      console.log(msg);
      this.socket.emit("data", JSON.stringify(msg));
  }

  async waitUntilOpen(){
    if(this.open) return Promise.resolve();
    else return lastValueFrom(this.status);
  }
}
