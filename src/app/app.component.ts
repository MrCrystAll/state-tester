import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, RouterOutlet} from '@angular/router';
import {Store, StoreModule} from "@ngrx/store";
import {setActions} from "./store/store.actions";
import { ApiService } from './services/api.service';
import { CallbackInfo } from './model/api.model';
import { ApiMapperService } from './services/api-mapper.service';

let binding: boolean = false
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, StoreModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'state-tester';
  callbacks: CallbackInfo[] = []
  errorField: string = ""
  infoField: string = ""


  constructor(protected _store: Store, protected _api: ApiService, protected _apiMapper: ApiMapperService) {
    this.errorField = ""
    this.infoField = ""
    this._initCallbacks()
    
  }

  private _initCallbacks(){
    this.infoField = "Retrieving callbacks..."
    this.errorField = ""
    this._api.getCallbacksInfos().then((value: any) => {
      this.callbacks = []
      for (let index = 0; index < value['data'].length; index++) {
        const element = value['data'][index];
        this.callbacks.push(this._apiMapper.mapObjectToCallbackInfo(element))
      }
      this.infoField = ""
    }).
    catch((reason: any) => {
      this.infoField = ""
      this.errorField = "Couldn't retrieve callbacks: " + reason.statusText
    }) 
  }


  ngOnInit(): void {
    this._store.dispatch(setActions({inputs: [1, 2, 2, 0, 0, 0, 1]}))
  }
}
