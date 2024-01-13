import { Component, Input, OnInit, Type } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CallbackInfo } from '../../../model/api.model';
import { ApiService } from '../../../services/api.service';
import { Observable, Subject } from 'rxjs';
import { PlayClipComponent } from '../../commands/play-clip/play-clip.component';
import { RegisterClipComponent } from '../../commands/register-clip/register-clip.component';

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
  popups: any[] = [];
  current_popup: any;

  $returns: Subject<any> = new Subject<any>();

  constructor(protected readonly _apiSvc: ApiService){
    this.display = this.info !== undefined && this.info.subcommands !== undefined && this.info.subcommands instanceof Array && this.info.subcommands.length > 0;
    if(this.info){
      this.info.commands.forEach(element => {
        this.popups.push(this._retrieveComponent(element.name))
      });
    }
  }

  private _retrieveComponent(name: string){
    if(name == "play-clip") return PlayClipComponent;
    return RegisterClipComponent;
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
