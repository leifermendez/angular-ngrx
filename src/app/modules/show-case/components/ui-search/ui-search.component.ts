import { Component, OnInit } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';

@Component({
  selector: 'app-ui-search',
  templateUrl: './ui-search.component.html',
  styleUrls: ['./ui-search.component.css']
})
export class UiSearchComponent implements OnInit {

  src: string = '';

  constructor(public showCaseService: ShowCaseService) { }

  ngOnInit(): void {

  }

  search(src: string): void {
  }

}
