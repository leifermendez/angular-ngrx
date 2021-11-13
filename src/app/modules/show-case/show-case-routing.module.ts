import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowCasePageComponent } from './page/show-case-page/show-case-page.component';

const routes: Routes = [
  {
    path: '',
    component: ShowCasePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowCaseRoutingModule { }
