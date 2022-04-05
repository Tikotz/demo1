import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-botton',
  templateUrl: './simple-botton.component.html',
  styleUrls: ['./simple-botton.component.css']
})
export class SimpleBottonComponent implements OnInit {

  constructor() { }

  handleClick(myVar: string) {
    alert(myVar);
  }


  ngOnInit(): void {
  }

}
