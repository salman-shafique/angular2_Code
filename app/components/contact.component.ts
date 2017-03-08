import { Component } from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'contact',
  templateUrl: `./app/compTemplate/contact.component.html`,
})
export class Contact {
    constructor(http:Http){

    }
    onSubmit(value:any){
    console.log(value);
  }
     consol(){
        console.log('qwqw');
    }

    
 }
