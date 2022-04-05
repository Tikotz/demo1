import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright2',
  template:`<h1 class="redAlert"> Hello : {{someName}} from single file component</h1>`,
  styles: [`
  .redAlert{
    color:red;
  }
  `],
  // templateUrl: './copyright2.component.html',
  // styleUrls: ['./copyright2.component.css']
})
export class Copyright2Component implements OnInit {

  constructor() { }
  someName:string = 'David'
  ngOnInit(): void {
  }

}
