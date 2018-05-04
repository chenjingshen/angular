import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Customer, CustomerService } from '../../../shared/customer.service';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.css']
})
export class CustomerInfoComponent implements OnInit {

  operation:string = "新增"

  //客户类型
  types:string[] = ["个人","单位"]

  //行业分类
  categories:string[] = ["IT","金融","物流","影视表演","医疗"]

  //客户对象
  customer:Customer = new Customer('','','','',0,'',[])

  // ActivatedRoute 就有点类似于 Vue中的 this.$route
  constructor(public route: ActivatedRoute,public router:Router,public customerService:CustomerService) { }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      if(params.customerId === '0'){//新增
        this.operation = "新增"
      }else{
        this.operation = "修改"

        this.customerService.getCustomerById(params.customerId).subscribe(data=>{
          this.customer = data
        })
      }
    })
  }

  //接收到子组件传递过来的值
  getChangedRatingValue(rating:number){
    this.customer.rating = rating
  }

  cancel(){
    this.router.navigateByUrl('/customer/customer-list')
  }

  save(){
    //修改的时候，一定要加上
    this.customer.categories = []

    //获取checkbox选中的值
    const checkboxes = document.getElementsByName("categoriesName")
    for(var i = 0;i<checkboxes.length;i++){
      if(checkboxes[i]["checked"]){
        this.customer.categories.push(checkboxes[i]["value"])
      }
    }
    
    if(this.operation === '新增'){
      //要获取this.customer的值
      delete this.customer._id
    
      //请求真正的发送，只有在订阅流的时候，才会真正发出
      this.customerService.addCustomer(this.customer).subscribe(data=>{
        this.router.navigateByUrl('/customer/customer-list')
      })
    }else{
      this.customerService.updateCustomer(this.customer).subscribe(data=>{
        this.router.navigateByUrl('/customer/customer-list')
      })
    }
  }
}
