import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  username:string ='Sagar'

  constructor(private service:SharedService){

  }

  ngOnInit(): void {
    this.service.username.subscribe(res=>{
            // console.log("username",res);
      // get value in username after next(value)
      this.username =res
    })
    
  }
  submit(uname:any){
    // console.log(uname.value);
    this.service.username.next(uname.value)
    uname.value = ''
    
  }

}
