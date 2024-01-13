import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatDialog} from '@angular/material/dialog'
import { Subject } from 'rxjs';
import { CommandApiInterface } from '../../../model/commands';
import { ApiService } from '../../../services/api.service';
import { CallbackInfo } from '../../../model/api.model';

@Component({
  selector: 'play-clip-popup',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './play-clip.component.html',
  styleUrl: './play-clip.component.css'
})
export class PlayClipComponent implements CommandApiInterface {
  @Input() inputs: any;
  @Input() info!: CallbackInfo;
  out: any;
  
  constructor(private dialog: MatDialog, private _apiSvc: ApiService){
  }

  close(){
    this.send_to_api();
  }

  send_to_api(): undefined {
    this._apiSvc.postCommandExec({
      id: this.info.id,
      name: 'play-clip'
    }).then((value: any) => this.out = value);
  }

  openDialog(){
    this.dialog.open(PlayClipComponent);
  }
}
