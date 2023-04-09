import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor() { }
  exclusivesubject = new Subject<boolean>()
  username = new Subject<string>();

  bsubject = new BehaviorSubject<boolean>(false)

  uname = new BehaviorSubject<string>('Sagar')

  userlist = new ReplaySubject(3) 
}
