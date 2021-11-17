import { ItemsState } from '@core/models/Item.state';
import { createSelector } from '@ngrx/store'; //TODO <----
import { AppState } from '../app.state';

//TODO: Es el selector que tiene relacion con la propiedad "items"

export const selectItemsFeature = (state: AppState) => state.items;//TODO: PADRE

export const selectListItems = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.items //TODO: HIJO
);

export const selectLoading = createSelector(
    selectItemsFeature,
    (state: ItemsState) => state.loading //TODO: HIJO
);