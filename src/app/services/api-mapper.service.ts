import { Injectable } from '@angular/core';
import { CallbackInfo } from '../model/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiMapperService {

  constructor() { }

  mapObjectToCallbackInfo(value: any): CallbackInfo{
    if(value === undefined) return new CallbackInfo();
    let elt: CallbackInfo = {
      id: value.id,
      name: value.name,
      path: value.path,
      commands: value.commands,
      subcommands: value.subcommands,
      callback: value.callback
    }
    return elt
  }
}
