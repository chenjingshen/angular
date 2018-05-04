import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CustomerService } from './shared/customer.service'
import {HttpModule} from '@angular/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { SettingsComponent } from './components/settings/settings.component';
import { StarsComponent } from './components/stars/stars.component';
import { CustomerInfoComponent } from './components/customer/customer-info/customer-info.component';

// declarations 代表 声明/注册所有的组件
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    ContentComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CustomerListComponent,
    SettingsComponent,
    StarsComponent,
    CustomerInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, //相当于把路由注入到跟模块中，跟Vue类似
    HttpModule,
    FormsModule //表单操作、双向数据绑定都需要他
  ],
  providers: [CustomerService],//服务都是放在这里的
  bootstrap: [AppComponent]
})
export class AppModule { }
