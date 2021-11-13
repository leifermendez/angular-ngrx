import { ItemModel } from '@core/models/Item.interface';
import { createReducer, on, props } from '@ngrx/store';
import { addItem, retrievedItemList } from '../actions/items.actions';

//TODO: 1
export const initialState: ReadonlyArray<ItemModel> = [];

export const itemsReducer = createReducer(
    initialState,
    on(addItem, (oldState, { item }) => {
        return [...[item], ...oldState]
    }),
    on(retrievedItemList, (oldState, { items }) => {
        return [...oldState, ...items]
    })
);