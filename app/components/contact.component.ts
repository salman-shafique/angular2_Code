import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'contact',
  templateUrl: `./app/compTemplate/contact.component.html`,
  styles:[`.invalid{color:#a94442}`]
})
export class Contact {

    onSubmit(value:any){
    console.log(value);
  }


    
 }
