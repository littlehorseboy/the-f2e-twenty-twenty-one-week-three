import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaiwanBusEClickComponent } from './taiwan-bus-e-click.component';

const routes: Routes = [{ path: '', component: TaiwanBusEClickComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaiwanBusEClickRoutingModule { }
