import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component implements OnInit {
  uname:any;

  constructor(private service:SharedService){}
  ngOnInit(): void {
    this.service.uname.subscribe(res=>{
      this.uname = res
    })
  }

  submit(uname:any){
    // console.log(uname.value);
    this.service.uname.next(uname.value)
    uname.value = ''

    
  }


}
