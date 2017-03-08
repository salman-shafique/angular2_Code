import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms'

import { AppComponent }   from './app.component';
import { departments }   from './components/departments.component';
import { employees }   from './components/employees.component';

import { Navigation }   from './components/navigation.component';
import { Work }   from './components/work.component';
import { About }   from './components/about.component';
import { Banner }   from './components/banner.component';
import { Contact }   from './components/contact.component';
import { Footer }   from './components/footer.component';
@NgModule({
  imports:      [ BrowserModule,FormsModule,
  RouterModule.forRoot([
     
       {path:'',component:Banner},
       {path:'dept',component:departments},
       {path:'work',component:Work},
       {path:'about',component:About},
       {path:'banner',component:Banner},
       {path:'contact',component:Contact},

  ]) ],
  declarations: [ AppComponent,departments,employees,Navigation,Work,About,Banner,Contact,Footer ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
