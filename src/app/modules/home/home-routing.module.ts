import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'show-case',
    loadChildren: () => import('@modules/show-case/show-case.module').then((m) => m.ShowCaseModule)
  },
  {
    path: 'builder',
    loadChildren: () => import('@modules/builder/builder.module').then((m) => m.BuilderModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
