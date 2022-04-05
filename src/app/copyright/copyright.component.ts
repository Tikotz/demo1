import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-copyright',
  template: `<p class="copy">copyright Ori {{getYear()}} </p>`,
  styles: [`
    .copy {
    font-weight: 700;
    color:gray;
    }
  `],
})
export class CopyrightComponent implements OnInit {

  constructor() { }

  
  getYear(): number {
    let year = new Date().getFullYear()
    return year;
  };
  
  ngOnInit(): void {
  }

}
