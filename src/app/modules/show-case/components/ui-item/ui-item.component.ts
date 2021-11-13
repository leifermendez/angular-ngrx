import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-item',
  templateUrl: './ui-item.component.html',
  styleUrls: ['./ui-item.component.css']
})
export class UiItemComponent implements OnInit {
  @Input() item: any;
  constructor() { }

  ngOnInit(): void {
  }

}
