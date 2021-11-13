import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui-filter',
  templateUrl: './ui-filter.component.html',
  styleUrls: ['./ui-filter.component.css']
})
export class UiFilterComponent implements OnInit {

  test = [...Array(12).keys()]

  constructor() { }

  ngOnInit(): void {
  }

}
