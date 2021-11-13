import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowCaseRoutingModule } from './show-case-routing.module';
import { UiSearchComponent } from './components/ui-search/ui-search.component';
import { UiFilterComponent } from './components/ui-filter/ui-filter.component';
import { ShowCasePageComponent } from './page/show-case-page/show-case-page.component';
import { UiItemComponent } from './components/ui-item/ui-item.component';
import { UiBlockItemComponent } from './components/ui-block-item/ui-block-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UiSearchComponent,
    UiFilterComponent,
    ShowCasePageComponent,
    UiItemComponent,
    UiBlockItemComponent
  ],
  imports: [
    CommonModule,
    ShowCaseRoutingModule,
    FormsModule
  ]
})
export class ShowCaseModule { }
