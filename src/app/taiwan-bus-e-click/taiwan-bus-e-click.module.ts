import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaiwanBusEClickRoutingModule } from './taiwan-bus-e-click-routing.module';
import { TaiwanBusEClickComponent } from './taiwan-bus-e-click.component';


@NgModule({
  declarations: [
    TaiwanBusEClickComponent
  ],
  imports: [
    CommonModule,
    TaiwanBusEClickRoutingModule
  ]
})
export class TaiwanBusEClickModule { }
