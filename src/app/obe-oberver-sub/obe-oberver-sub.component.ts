import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-obe-oberver-sub',
  templateUrl: './obe-oberver-sub.component.html',
  styleUrls: ['./obe-oberver-sub.component.css']
})
export class ObeOberverSubComponent implements OnInit {

  date:any;

  ngOnInit(): void {
    console.log('Before observables');
    
    let observable = new Observable(sub=>{
      sub.next(1);
      sub.next(2);
      sub.next(3);
      setTimeout(() => {
        sub.next(4)
      }, 2000);
    })
    console.log('After observables');
    console.log('before subcription');

    observable.subscribe({
      next(x){
        console.log('value', x);  
      },
      error(err){
        console.log(err);  
      },
      complete(){
        console.log('done');
        
      }
    })
    console.log('After subcription');


    // date creation

    let obs = new Observable(producer=>{
      setInterval(()=>{
producer.next(new Date())
      },1000)
    })
    // subcribe data
    let subcription = obs.subscribe(result=>{
        console.log(result);  
    })
    // unsubscribe data

    setTimeout(() => {
      subcription.unsubscribe();
    }, 5000);

    //show date continousoly
    obs.subscribe(result=>{
      this.date =result
    })



  }

}
