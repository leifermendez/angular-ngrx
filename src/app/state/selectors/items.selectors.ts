import { ItemModel } from '@core/models/Item.interface';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export const selectItems = createFeatureSelector<ReadonlyArray<ItemModel>>('items');

// export const selectCollectionState = createFeatureSelector<
//   ReadonlyArray<string>
// >('collection');

// export const selectBookCollection = createSelector(
//   selectBooks,
//   selectCollectionState,
//   (books, collection) => {
//     return collection.map((id) => books.find((book) => book.id === id));
//   }
// );