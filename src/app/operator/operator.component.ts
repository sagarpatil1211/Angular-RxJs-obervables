import { Component, OnInit } from '@angular/core';
import { filter, from, interval, map, of, take, toArray } from 'rxjs';

@Component({
  selector: 'app-operator',
  templateUrl: './operator.component.html',
  styleUrls: ['./operator.component.css']
})
export class OperatorComponent implements OnInit {

  no =[1,2,3,4,5,6,7,8,9,10];
 

  ngOnInit(): void {
    // Creation operator

    of(1,2,3).subscribe(res=>{
      console.log(res);
    })

    // pipeable operator
    // map pipe
    of(1,2,3).
    pipe(map(value=>{
      return value*2
    })).
    subscribe(res=>{
      console.log("map pipe =>",res);     
    })

    // toArray
    let source = interval(100)
    source.pipe(
      take(5),
      toArray()
    )
    .subscribe(res=>{
      console.log("toArray =>",res);  
    })

    let source2 = from(this.no);
    // console.log(source2);
    source2.pipe(
      filter(v=>{
       return v%2==0;
      }),
      toArray()
    )
    .subscribe(res=>{
      console.log("filter =>",res);
      
    })

  }

}
