import { createSelector } from "@ngrx/store";
import { ActionModel, StateModel } from "./store.model";

const selectState = (state: StateModel) => state.actionModel

export const selectActions = createSelector(
    selectState,
    (state: ActionModel) => {
        return state?.actions
    }
)