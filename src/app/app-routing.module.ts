import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'taiwan-bus-e-click', loadChildren: () => import('./taiwan-bus-e-click/taiwan-bus-e-click.module').then(m => m.TaiwanBusEClickModule) },
  { path: '', redirectTo: 'taiwan-bus-e-click', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
