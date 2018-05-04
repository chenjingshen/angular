import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//导入组件
import {HomeComponent} from './components/home/home.component'
import {CustomerListComponent} from './components/customer/customer-list/customer-list.component'
import {SettingsComponent} from './components/settings/settings.component'
import {CustomerInfoComponent} from './components/customer/customer-info/customer-info.component'

const routes: Routes = [
  //注意事项 path前面不要加/
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path:'home',component:HomeComponent},
  {path:'customer/customer-list',component:CustomerListComponent},
  {path:'customer/customer-info/:customerId',component:CustomerInfoComponent},
  {path:'settings',component:SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
