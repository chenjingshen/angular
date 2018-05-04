import { Component, OnInit, Input,Output,EventEmitter, OnChanges,SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnInit,OnChanges {

  //接收方这样写
  @Input() rating:number

  //接收方这样写
  @Input() readonly:boolean = true

  //子组件传值给父组件也是靠自定义事件
  @Output() ratingChange = new EventEmitter<number>()

  //星星的数组，装了五个boolean值
  stars:boolean[]

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void{
    this.stars = []
    for(var i=0;i<5;i++){
      //比如rating = 4   [false,false,false,false,true]
      this.stars.push(this.rating <= i)
    }
  }

  //点赞
  like(index){
    //传递出去的时候，加上1
    if(this.readonly) return

    this.ratingChange.emit(index+1)
  }

}
