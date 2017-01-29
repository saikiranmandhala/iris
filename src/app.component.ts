import { Component } from "@angular/core";
import { VolatileConstants } from "./services/volatileConstants.sevice";

@Component({
    selector: 'my-app',
    templateUrl:'src/app.component.html'
})
export class AppComponent {
    private name: string = "Our app always works!";

    constructor(private volConstService: VolatileConstants) { 
        console.log("Before Action ID generation.");
        console.log(this.volConstService.actionGuid);
    }

    submit(): void {
        console.log('From developer');
        console.log(this.volConstService.actionGuid);
    }
}
