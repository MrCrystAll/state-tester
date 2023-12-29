import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SERVER_URL, CALLBACK_CONTEXT } from '../app.const';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private client: HttpClient) {
  }

  getCallbacksInfos(): Promise<any>{
    return lastValueFrom(this.client.get(SERVER_URL + CALLBACK_CONTEXT))
  }
}
