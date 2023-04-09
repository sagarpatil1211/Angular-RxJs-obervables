import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  ngOnInit(): void {
    // promise

    const promise = new Promise(resolve=>{
      setTimeout(() => {
        resolve('promise working ')
      }, 2000);
      
    })
    promise.then(res=>{
      console.log(res); 
    })

    // Observables

    let observables = new Observable((sub)=>{
      setTimeout(() => {
        sub.next('observable working')
      }, 2000);
    })
    observables.subscribe(res=>{
      console.log(res);
      
    })
    
  }

   

}
