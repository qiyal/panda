import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UserComponentComponent} from './user-component/user-component.component';
import {GroupComponentComponent} from './group-component/group-component.component';
import {DashboardComponentComponent} from './dashboard-component/dashboard-component.component';

const adminRouters: Routes = [
  { path: 'user', component: UserComponentComponent },
  { path: 'group', component: GroupComponentComponent },
  { path: 'dashboard', component: DashboardComponentComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRouters)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
