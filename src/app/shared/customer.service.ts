import { Injectable } from "@angular/core";
import { Http } from '@angular/http'
import { Observable } from "rxjs";
import 'rxjs/Rx' //在里面提供了对.map方法的支持

//导入公共的模块
import common from './common'

@Injectable()
export class CustomerService{
    //依赖注入
    constructor(public http:Http){}

    /**
     * 根据客户名称获取对应的列表数据就写完了
     * @param name 查询的关键字，如果为"" 查询所有
     */
    getCustomerListByName(name:string):Observable<any>{
        const url = `${common.apihost}api/customerlist?keyword=${name}`

        return this.http.get(url).map(response => response.json())
    }

    /**
     * 根据客户id删除客户信息
     * @param customerId 客户id
     */
    deleteCustomerById(customerId:string):Observable<any>{
        const url = `${common.apihost}api/deleteCustomer/${customerId}`

        return this.http.get(url).map(response => response.json())
    }

    /**
     * 根据客户id获取客户信息
     * @param customerId 客户id
     */
    getCustomerById(customerId:string):Observable<Customer>{
        const url = `${common.apihost}api/customer/${customerId}`

        return this.http.get(url).map(response => response.json())
    }

    /**
     * 新增客户信息
     * @param customer 客户对象
     */
    addCustomer(customer:Customer):Observable<any>{
        const url = `${common.apihost}api/addCustomer`

        //post在提交的时候，会以JSON格式的字符串形式提交
        return this.http.post(url,customer).map(response=>response.json())
    }

    /**
     * 修改客户信息
     * @param customer 客户对象
     */
    updateCustomer(customer:Customer):Observable<any>{
        const url = `${common.apihost}api/updateCustomer`

        return this.http.post(url,customer).map(response=>response.json())
    }
}

/**
 * 客户类，通过该类可以创建客户对象
 */
export class Customer{
    constructor(public _id:string,public no:string,public name:string,public type:string,public rating:number,public description:string,public categories:string[]){}
}