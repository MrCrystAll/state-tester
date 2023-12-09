import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Store, StoreModule} from "@ngrx/store";
import {Server} from 'socket.io'
import {SetActions} from "./store/store.actions";

let server: Server | undefined = undefined
let binding: boolean = false
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'state-tester';
  clientSocket: any

  constructor(protected _store: Store) {
    if(server === undefined){
      server = new Server()
      //server.listen(5000)
    }
  }


  ngOnInit(): void {
    this._store.dispatch(SetActions({inputs: [1, 2, 2, 0, 0, 0, 1]}))
    if(server === undefined || binding) return;
    binding = true

    //Wait for tester
    server.on("connect", (socket) => {
      console.log("Got client")
      this.clientSocket = socket

      socket.on('input-change', (data: any) => {
        console.log("Input change: " + data.value)
        this._store.dispatch(SetActions({inputs: data.value}))
      })

      socket.on("disconnect", () => {
        this.clientSocket = undefined
        console.log("Client disconnected")
      })
    })
  }

  protected readonly server = server;
}
