import { Component, OnInit } from '@angular/core';
import type {user} from '../interface/user'
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: user = {
    name: 'ori',
    email: 'oritiko@gmail,com',
    birthday: Date.parse('1998-02-28'),
    contact: 'phone',
  }

  color: string = 'red';

  isSpecial: boolean = true;

  correntStyle = {};

  canSave: boolean = true;
  cantSave: boolean = true;


  classes:any = {
    amazing:'',
    wow:''
  }
  isClassSecial: boolean = true;


  constructor() {
    this.setCorrentStyle(); 
    this.setMyClasses();
    
  }
  
  ngOnInit(): void {
  }
  
  CalculateAge(dateOfBirth:any){
    let dob = new Date(dateOfBirth);
    let diff_ms = Date.now() - dob.getTime();
    let age_dt = new Date(diff_ms);
    return Math.abs(age_dt.getUTCFullYear() - 1970)
  }

  setCorrentStyle(){
    this.correntStyle = {
      'font-style': this.canSave ? 'italic' : 'normal',
      'font-size': this.cantSave ? '20px' : '10px'
    }
  }

  setMyClasses(){
    this.classes = {
      wow:true,
      amazing:false
    }
  }
  
  
}
