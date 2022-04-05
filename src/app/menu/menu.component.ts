import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  links: any[] = [];
  constructor() {
    this.links = [
      {title: 'Yahoo', link: 'https://yahoo.com', target: '_blank'},
      {title: 'Google', link: 'https://google.com', target: '_blank'}
    ];
   }

  ngOnInit(): void {
  }

}
