import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  username:string = 'Sagar'

  constructor(private service:SharedService){}

  ngOnInit(): void {
    this.service.username.subscribe(res=>{
            // console.log("username",res);
      // get value in username after next(value)
      this.username = res
    })
  }

  submit(uname:any){
    // console.log(uname.value);
    this.service.username.next(uname.value)
    uname.value = ''
    
  }

}
