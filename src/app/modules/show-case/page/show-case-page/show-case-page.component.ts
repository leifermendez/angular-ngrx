import { selectLoading } from './../../../../state/selectors/items.selectors';
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

  constructor(private store: Store<any>,) {
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading)//TODO: true, false

    this.store.dispatch(loadItems()) //TODO🔴


  }



}
