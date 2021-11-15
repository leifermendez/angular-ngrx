
import { Component, Input, OnInit } from '@angular/core';
import { ShowCaseService } from '@modules/show-case/services/show-case.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ui-block-item',
  templateUrl: './ui-block-item.component.html',
  styleUrls: ['./ui-block-item.component.css']
})
export class UiBlockItemComponent implements OnInit {

  listData: any = []

  constructor(private showCase: ShowCaseService) {


  }

  ngOnInit(): void {
    this.showCase.getDataApi()
      .subscribe((res) => {
        this.listData = res
      })
  }


}
