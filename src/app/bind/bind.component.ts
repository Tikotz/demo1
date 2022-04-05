import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind',
  templateUrl: './bind.component.html',
  styleUrls: ['./bind.component.css']
})
export class BindComponent implements OnInit {

  constructor() { }

  myVar:number = 3;
  myBool:boolean = false;

  ngOnInit(): void {
  }

}
