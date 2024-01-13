import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackInfo } from '../../../model/api.model';
import { ApiService } from '../../../services/api.service';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'commands-handler',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './commands-handler.component.html',
  styleUrl: './commands-handler.component.css'
})
export class CommandsHandlerComponent implements OnInit{
  @Input({required: false}) info!: CallbackInfo;
  return_info: any;
  display: boolean = false;

  $returns: Subject<any> = new Subject<any>();

  constructor(protected readonly _apiSvc: ApiService){
    this.display = this.info !== undefined && this.info.subcommands !== undefined && this.info.subcommands instanceof Array && this.info.subcommands.length > 0;
  }

  ngOnInit(): void {
    this.display = this.info !== undefined && this.info.subcommands !== undefined && this.info.subcommands instanceof Array && this.info.subcommands.length > 0;
  }

  get_cb_info(){
    this._apiSvc.postCommandExec({
      id: this.info.id,
      name: "get_cb_data"
    }).then((value: any) => this.$returns.next(value));
  }

  send_to_api(event: Event, callback: ((value: any) => void) | undefined = undefined){
    let cmd_name = (event.target as HTMLElement).id;
    this._apiSvc.postCommandExec({
      id: this.info.id,
      name: cmd_name
    }).then((value: any) => {this.$returns.next(value); if(callback) callback(value)})
  }
}
