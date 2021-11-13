import { ItemModel } from "@core/models/Item.interface";
import { ActionReducerMap } from "@ngrx/store";
import { itemsReducer } from "./reducers/items.reducer";

export interface AppState {
    items: ReadonlyArray<ItemModel>;
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    items: itemsReducer
}