import { loadedItems } from './../actions/items.actions';
import { ItemsState } from '@core/models/Item.state';
import { createReducer, on } from '@ngrx/store'; //TODO <----
import { loadItems } from '../actions/items.actions';

//TODO: (2) Estado inicial!

export const initialState: ItemsState = { loading: false, items: [] }

// {
//     "items":{
//         "loading":"false",
//         "items":[]
//     }
// }

//TODO: (3)

export const itemsReducer = createReducer(
    initialState,
    on(loadItems, (state) => { //TODO:!
        return { ...state, loading: true }
    }),
    on(loadedItems, (state, { items }) => { //TODO:!
        return { ...state, loading: false, items }
    })
);