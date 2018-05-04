import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  //当前选中的menuId,默认值是1
  currentMenuId:number = 1

  /** 通过依赖注入的方式，导入了编程式导航所需要的Router */
  constructor(public router:Router) { }

  menus:Menu[] = [
    new Menu(1,"首 页",'/home'),
    new Menu(2,"客户管理",'/customer/customer-list'),
    new Menu(3,"设置",'/settings')
  ]

  ngOnInit() {
  }

  navigateTo(menu:Menu){

    this.currentMenuId = menu.menuId

    //这个就有点类似于 this.$router.push(xxx)
    this.router.navigateByUrl(menu.navigateToURL)
  }
}

class Menu{
  /**
   * 
   * @param menuId 菜单id
   * @param menuName 菜单的名称
   * @param navigateToURL 点击菜单之后触发的路径
   */
  constructor(public menuId:number,public menuName:string,public navigateToURL:string){
    
  }
}
