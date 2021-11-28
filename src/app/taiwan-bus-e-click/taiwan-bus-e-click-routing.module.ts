import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { TaiwanBusEClickComponent } from './taiwan-bus-e-click.component';

const routes: Routes = [
  {
    path: '',
    component: TaiwanBusEClickComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaiwanBusEClickRoutingModule { }
