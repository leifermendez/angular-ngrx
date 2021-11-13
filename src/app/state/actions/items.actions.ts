import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store';

export const addItem = createAction(
    '[Items List] Add Item',
    props<{ item: ItemModel }>()
);


export const retrievedItemList = createAction(
    '[Item List/API] Retrieve Item Success',
    props<{ items: ReadonlyArray<ItemModel> }>()
);