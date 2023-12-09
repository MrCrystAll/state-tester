// counter.actions.ts
import {createAction, props} from '@ngrx/store';

export const ACTIONS_FEATURE_KEY = 'actions'
export const SET_ACTIONS = '[Tester] Set actions';

export const SetActions = createAction(
  SET_ACTIONS,
  props<{inputs: number[]}>()
)
