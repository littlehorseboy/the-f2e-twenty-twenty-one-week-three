import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { TaiwanBusEClickRoutingModule } from './taiwan-bus-e-click-routing.module';
import { TaiwanBusEClickComponent } from './taiwan-bus-e-click.component';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    TaiwanBusEClickComponent,
    IndexComponent
  ],
  imports: [
    CommonModule,
    TaiwanBusEClickRoutingModule,
    ButtonModule,
    ToolbarModule,
  ]
})
export class TaiwanBusEClickModule { }
