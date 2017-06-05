import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html'
})
export class AppComponent { 
    
    name: string; 
    
    message: string;
    
    onClick() {
        this.message = 'Hello ' + this.name;
    }
}
