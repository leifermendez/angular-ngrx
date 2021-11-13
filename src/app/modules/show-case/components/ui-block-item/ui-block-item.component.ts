import { Component, Input, OnInit } from '@angular/core';
import { ItemModel } from '@core/models/Item.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  @Input() listData: ItemModel[] = []

  constructor() {



  }

  ngOnInit(): void {
  }


}
