import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponentComponent} from './dashboard-component/dashboard-component.component';
import {GroupComponentComponent} from './group-component/group-component.component';
import {UserComponentComponent} from './user-component/user-component.component';
import {AdminRoutingModule} from './admin-routing.module';

@NgModule({
  declarations: [
    DashboardComponentComponent,
    GroupComponentComponent,
    UserComponentComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
