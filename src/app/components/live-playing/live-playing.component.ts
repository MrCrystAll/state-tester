import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store, StoreModule} from "@ngrx/store";
import {StateModel} from "../../store/store.model";
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import { Observable } from 'rxjs';
import { selectActions } from '../../store/store.selectors';
import { ActivationComponent } from "../common/activation/activation.component";
import { Router } from '@angular/router';
import { CallbackInfo } from '../../model/api.model';
import { CommandsHandlerComponent } from "../common/commands-handler/commands-handler.component";
import { ApiService } from '../../services/api.service';

@Component({
    selector: 'live-playing',
    standalone: true,
    templateUrl: './live-playing.component.html',
    styleUrl: './live-playing.component.css',
    imports: [CommonModule, StoreModule, ReactiveFormsModule, ActivationComponent, CommandsHandlerComponent]
})
export class LivePlayingComponent implements AfterViewInit{
  $actions: Observable<number[]> = this._store.select(selectActions)
  actions: number[] = [1, 0, 0, 0, 0, 0, 0, 0]
  active: boolean = true
  info: any

  component_state: any;
  @ViewChild("commandHandler") handler!: CommandsHandlerComponent

  activeFormGroup: FormGroup = new FormGroup({
    'active': new FormControl(false)
  })

  constructor(protected readonly _store: Store<StateModel>, protected readonly _router: Router) {
    this.info = this._router.getCurrentNavigation()?.extras.state;
  }

  ngAfterViewInit(): void {
    this.handler.$returns.subscribe((value: any) => this.component_state = value)
    this.handler.get_cb_info();
  }
}
