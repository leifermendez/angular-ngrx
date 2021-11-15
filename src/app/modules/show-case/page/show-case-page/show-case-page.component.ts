import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Observable } from 'rxjs';

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
  ) {


  }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(): void {

  }

}
