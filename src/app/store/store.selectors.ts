import { createReducer, createSelector } from "@ngrx/store";
import { StateModel } from "./store.model";

const selectState = (state: StateModel) => state

export const selectActions = createSelector(
    selectState,
    (state: StateModel) => state.actions
    
)