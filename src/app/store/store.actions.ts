// counter.actions.ts
import {createAction, props} from '@ngrx/store';

export const SET_ACTIONS = '[Tester] Set actions';

export const setActions = createAction(
  SET_ACTIONS,
  props<{inputs: number[]}>()
)
