import {GameState, PhysicsState, StateModel} from "./store.model";
import {createReducer, on} from "@ngrx/store";
import {setActions} from "./store.actions";

export const initialState: StateModel = {
  actionModel: {
    actions: [1, 0, 1, 0, 1, 0, 1, 0]
  },
  rewards: [{
    names: ['R1', 'R2'],
    values: [1, 2]
  }],
  simulator: {},
  state: new GameState()
}

export const actionReducer = createReducer(
  initialState,
  on(setActions, (state, { inputs }) => {
    
    return ({...state, actionModel: {actions: inputs}})
  }
    )
)
