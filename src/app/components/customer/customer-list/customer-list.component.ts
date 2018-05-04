import { Component, OnInit } from '@angular/core';
import { CustomerService, Customer } from '../../../shared/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(public customerService:CustomerService,public router:Router) { }

  //搜索的关键字，默认是空串
  keyword:string = ""

  //客户列表数组
  customerList:Customer[]

  //相当于vue组件中 created生命周期钩子
  ngOnInit() {
    this.getCustomerList()
  }

  getCustomerList(){
    //1.调用服务的方法
    this.customerService.getCustomerListByName(this.keyword).subscribe(data=>{
      this.customerList = data
    })
  }

  //搜索
  searchByName(){
    this.getCustomerList()
  }

  //删除
  deleteCustomer(customerId:string){
    if(confirm("确认删除吗?")){
      this.customerService.deleteCustomerById(customerId).subscribe(data=>{
        this.getCustomerList()
      })
    }
  }

  //跳转到客户详情组件中去
  goToAddCustomer(){
    this.router.navigate(["/customer/customer-info/",0])
  }
}
