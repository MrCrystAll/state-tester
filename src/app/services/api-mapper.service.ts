import { Injectable } from '@angular/core';
import { CallbackInfo } from '../model/api.model';

@Injectable({
  providedIn: 'root'
})
export class ApiMapperService {

  constructor() { }

  mapObjectToCallbackInfo(value: any): CallbackInfo{
    let elt: CallbackInfo = {
      name: value.name,
      path: value.path
    }
    return elt
  }
}
