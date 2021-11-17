import { selectLoading } from './../../../../state/selectors/items.selectors';
import { loadedItems } from './../../../../state/actions/items.actions';
import { ItemModel } from './../../../../core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';//TODO <---
import { loadItems } from 'src/app/state/actions/items.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable()

  constructor(
    private store: Store<any>,
    private showCaseService: ShowCaseService
  ) {


  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)

    this.store.dispatch(loadItems())

    this.showCaseService.getDataApi()
      .subscribe((response: ItemModel[]) => {

        this.store.dispatch(loadedItems(
          { items: response }
        ));

      })


  }



}
