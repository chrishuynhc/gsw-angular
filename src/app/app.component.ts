import { Component } from '@angular/core';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { aboutComponent } from './about/app.aboutComponent';

@Component({
  selector: 'my-app',
  templateUrl: `./main.html`,
})
export class AppComponent  { 
  
  name = 'Angular'; 


}
