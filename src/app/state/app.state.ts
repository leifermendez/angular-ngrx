import { ItemsState } from "@core/models/Item.state";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducers";

export interface AppState {
    items: ItemsState;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}