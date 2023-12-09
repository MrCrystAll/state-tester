import {StateModel} from "./store.model";
import {createReducer, on} from "@ngrx/store";
import {SetActions} from "./store.actions";

export const initialState = new StateModel()

export const actionReducer = createReducer(
  initialState,
  on(SetActions, (state, { inputs }) => ({...state, actions: inputs}))
)
