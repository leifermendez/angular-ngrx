import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { retrievedItemList } from 'src/app/state/actions/items.actions';
import { selectItems } from 'src/app/state/selectors/items.selectors';

@Component({
  selector: 'app-show-case-page',
  templateUrl: './show-case-page.component.html',
  styleUrls: ['./show-case-page.component.css'],
})
export class ShowCasePageComponent implements OnInit {

  listItems: ItemModel[] = []
  listItems$: Observable<any> = new Observable()

  constructor(
    private showCase: ShowCaseService,
    private store: Store
  ) {

    this.listItems$ = this.store.select(selectItems)

  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {
    this.showCase.getDataApi()
      .subscribe((res) => {
        this.store.dispatch(retrievedItemList({ items: res }))
      })
  }

}
