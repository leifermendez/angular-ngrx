import { ItemModel } from '@core/models/Item.interface';
import { createAction, props } from '@ngrx/store'; //TODO: <----


export const loadItems = createAction(
    '[Item List] Load items' //TODO type*
);

export const loadedItems = createAction(
    '[Item List] Loaded success',
    props<{ items: ItemModel[] }>()
)