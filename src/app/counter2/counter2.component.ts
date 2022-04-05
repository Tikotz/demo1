import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter2',
  templateUrl: './counter2.component.html',
  styleUrls: ['./counter2.component.css']
})
export class Counter2Component implements OnInit {

  constructor() { }

  counter:number = 0; 

  needToDisable:boolean = false;
  ngOnInit(): void {
  }



  handleClick(option:string) : void{
    if(option === '+'){
      this.counter++;
    }
      else
      {
        this.counter--;
      }
    
  }

  onPluse(){
    this.counter++;
  }
  onMinus(){
    this.counter--;
  }
}
