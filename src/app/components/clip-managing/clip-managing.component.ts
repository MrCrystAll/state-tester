import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivationComponent } from "../common/activation/activation.component";
import { CommandsHandlerComponent } from "../common/commands-handler/commands-handler.component";
import { Router } from '@angular/router';
import { CallbackInfo } from '../../model/api.model';
import { ApiMapperService } from '../../services/api-mapper.service';

@Component({
    selector: 'app-clip-managing',
    standalone: true,
    templateUrl: './clip-managing.component.html',
    styleUrl: './clip-managing.component.css',
    imports: [CommonModule, ActivationComponent, CommandsHandlerComponent]
})
export class ClipManagingComponent {
  info: CallbackInfo;


  constructor(protected readonly _router: Router, protected readonly _apiMapper: ApiMapperService){
    this.info = this._apiMapper.mapObjectToCallbackInfo(this._router.getCurrentNavigation()?.extras.state);
  }
}
