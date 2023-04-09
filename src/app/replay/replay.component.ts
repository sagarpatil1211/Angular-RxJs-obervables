import { Component, OnInit } from '@angular/core';
import { interval, ReplaySubject, Subscription } from 'rxjs';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-replay',
  templateUrl: './replay.component.html',
  styleUrls: ['./replay.component.css']
})
export class ReplayComponent implements OnInit {


constructor(private service:SharedService){

}

// userlist
userlist1:any = [];
userlist2:any = [];
userlist3:any = [];

// subcription
  subcription2: Subscription =new Subscription
  subcription3 = new Subscription

  // toggle properties
  methodInterval:boolean = true;

  intsubcription = new Subscription

  ngOnInit(): void {
    console.log(this.subcription2);
    
    // replay subject
    let $replaySubject = new ReplaySubject(2);
    $replaySubject.next('hello');
    $replaySubject.next('How are you');
    $replaySubject.next('stay at home');
    $replaySubject.next('keep smiling');

    $replaySubject.subscribe(res=>{
      console.log('sub 1: ',res);   
    })
    $replaySubject.next('keep learning')
    $replaySubject.next('keep updated')

    $replaySubject.subscribe(res=>{
      console.log('sub 2 : ',res);   
    })

    // get subject data
    this.service.userlist.subscribe((res:any)=>{
      this.userlist1.push(res)
      
    })
  }

  // add video
  addvideo(video:any){
  if(video.value != ''){
      // console.log(video.value);
      this.service.userlist.next(video.value)
      video.value = ''  
  } 
  }

  //subscribeMode
  subscribeMode2:boolean = false
  subscribeMode3:boolean = false

  

  // user2Subscribe function
  user2Subscribe(){
    if(this.subscribeMode2){
      this.subcription2.unsubscribe();
    }
    else{
      this.subcription2 =  this.service.userlist.subscribe((res:any)=>{
        this.userlist2.push(res)   
      })

    }
    this.subscribeMode2 = !this.subscribeMode2
  }

  // user2Subscribe function
  user3Subscribe(){
    if(this.subscribeMode3){
      this.subcription3.unsubscribe()
    }
    else{
      this.subcription3 = this.service.userlist.subscribe((res:any)=>{
        this.userlist3.push(res)   
      })

    }
    this.subscribeMode3 = !this.subscribeMode3
  }

  // toggle method
  toggle(){
    if(!this.methodInterval){
      this.intsubcription.unsubscribe()
    }
    else{
      const brodcastvideo = interval(2000)
      this.intsubcription =  brodcastvideo.subscribe((res:any)=>{
        // console.log(res);
        this.service.userlist.next(`video : ${res}`)
        
      })

    }
    this.methodInterval = !this.methodInterval
  }
  

}
