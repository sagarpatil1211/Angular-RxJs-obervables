import { Component, OnDestroy, OnInit } from '@angular/core';
import { observable, Observable, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax'
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit, OnDestroy {

  username: string = 'Sagar'

  constructor(private service: SharedService) {
    // subject to show data when open particular component

    this.service.exclusivesubject.next(true)
  }


  ngOnInit(): void {
    // Observables are unicast

    let obervable = new Observable(obs => {
      obs.next(Math.floor(Math.random() * 10))
    })

    // subscriber 1
    obervable.subscribe(res => {
      console.log("Obervable subscriber 1 : " + res);
    })
    // subscriber 2

    obervable.subscribe(res => {
      console.log("Obervable subscriber 2 : " + res);
    })

    // Subject are multicast
    let subject = new Subject()

    // subscriber 1
    subject.subscribe(res => {
      console.log("Subject subscriber 1 : " + res);
    })

    // subscriber 2
    subject.subscribe(res => {
      console.log("Subject subscriber 2 : " + res);
    })
    subject.next((Math.floor(Math.random() * 10)))



    // ajax using observable open network tab 2 times api calls 

    let data = ajax('https://fakestoreapi.com/users') // return as observables
    data.subscribe(res => {
      console.log(res);
    })
    data.subscribe(res => {
      console.log(res);
    })


    // ajax using subject open network tab 1 times api calls 

    let data2 = ajax('https://fakestoreapi.com/products')
    let sub = new Subject();
    sub.subscribe(res => {
      console.log('ajax using subject', data2);
    })
    sub.subscribe(res => {
      console.log('ajax using subject', data2);
    })
    data2.subscribe(sub)




    // component cummunication

    this.service.username.subscribe(res => {
      // console.log("username",res);
      // get value in username after next(value)
      
      this.username = res;
    })

  }


  ngOnDestroy(): void {
    this.service.exclusivesubject.next(false)

  }

}
