import { Component, OnDestroy, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-bahavior',
  templateUrl: './bahavior.component.html',
  styleUrls: ['./bahavior.component.css']
})
export class BahaviorComponent implements OnInit,OnDestroy {

  uname:any;

  constructor(private service:SharedService){
      // show header data using behavior subject
  
      this.service.bsubject.next(true)
  }
  
  ngOnInit(): void {
    // Behavior subject
    let bSubject = new BehaviorSubject(10);
    bSubject.subscribe(res=>{
      console.log('Behavior subject subs 1',res);
    })
    
    bSubject.next(20)
    bSubject.subscribe(res=>{
      console.log('Behavior subject subs 2',res);
    })

    // component cummunication
    this.service.uname.subscribe(res=>{
      // console.log(res);
      this.uname = res

      
    })
  }
  ngOnDestroy(): void {
    this.service.bsubject.next(false)
  }
  
}
