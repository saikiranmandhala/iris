import { Component, OnInit, Output, EventEmitter,Input } from '@angular/core';
import { VolatileConstants } from "../services/volatileConstants.sevice";

@Component({
    //moduleId: module.id,
    selector: 'i-button',

    template: `
<button class="{{iclass}}" (click)="generateActionId($event)">{{label}}</button>
    `
})
export class ButtonComponent implements OnInit {
    label: string = 'Submit';
    
    @Input()
    iclass:string = 'btn btn-primary';
    @Output()
    iclick = new EventEmitter<any>();

    constructor(private volConstService: VolatileConstants) { }

    ngOnInit() { }



    generateActionId($event) {
        $event.preventDefault();
        console.log('============Framework Starts===========');
        console.log('============Created new GUID===========');
        this.volConstService.newGUID();
        console.log(this.volConstService.actionGuid);
        this.iclick.emit($event);
        this.volConstService.nullifyGUID();
        console.log('============Removed GUID===========');
        console.log('============Framework Ends===========');
    }

}