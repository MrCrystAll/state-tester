import {Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Store, StoreModule} from "@ngrx/store";
import {StateModel} from "../../store/store.model";
import {SetActions} from "../../store/store.actions";
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import { Observable } from 'rxjs';
import { selectActions } from '../../store/store.selectors';

@Component({
  selector: 'app-live-playing',
  standalone: true,
  imports: [CommonModule, StoreModule, ReactiveFormsModule],
  templateUrl: './live-playing.component.html',
  styleUrl: './live-playing.component.css'
})
export class LivePlayingComponent {
  $actions: Observable<number[]> = this._store.select(selectActions)
  actions: number[] = [1, 0, 0, 0, 0, 0, 0, 0]
  active: boolean = true

  activeFormGroup: FormGroup = new FormGroup({
    'active': new FormControl(false)
  })

  constructor(protected readonly _store: Store<StateModel>) {
    this._store.dispatch(SetActions({inputs: [1, 0, 1, 0, 1, 0, 1, 0]}))
    this.$actions.subscribe((actions: number[]) => {
      this.actions = actions;
    })
  }
}
