import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngif2',
  templateUrl: './ngif2.component.html',
  styleUrls: ['./ngif2.component.css']
})
export class Ngif2Component implements OnInit {

  constructor() { }

  imgIsVisibale:boolean = true;
  ngOnInit(): void {
  }

  handleClick(){
    this.imgIsVisibale = !this.imgIsVisibale;
  }

}
