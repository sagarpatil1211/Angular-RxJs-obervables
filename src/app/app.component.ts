import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '14_rxJS';
  exclusivesubject:boolean = false;
  bsubject:any;

  constructor(private service:SharedService){}
  
  ngOnInit(): void {
    this.service.exclusivesubject.subscribe(res=>{
      this.exclusivesubject = res
    })

    this.service.bsubject.subscribe(res=>{
      this.bsubject = res
    })

  }
}
