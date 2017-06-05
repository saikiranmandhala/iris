import { Component, Input, OnInit, EventEmitter, ViewChild, trigger, state, transition, style, animate, Inject, forwardRef } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/primeng';
import { AppComponent } from '../app.component';
import { DomHandler } from '../dom/domhandler';

@Component({
    moduleId: module.id,
    selector: 'app-submenu',
    templateUrl: 'app-sub-menu.component.html',
    providers: [DomHandler]
})

export class AppSubMenuComponent implements OnInit {

    @Input() item: MenuItem;

    @Input() root: boolean;

    constructor(public domHandler: DomHandler) {

    }

    ngOnInit() {
        console.log(this.item);
    }

    activeItem: any;

    onItemMouseEnter(event: Event, item: HTMLLIElement, menuitem: MenuItem) {
        if (menuitem.disabled) {
            return;
        }

        this.activeItem = item;
        let nextElement = <HTMLLIElement>item.children[0].nextElementSibling;
        if (nextElement) {
            let sublist = <HTMLUListElement>nextElement.children[0];
            sublist.style.zIndex = String(++DomHandler.zindex);

            if (this.root) {
                sublist.style.top = this.domHandler.getOuterHeight(item.children[0]) + 'px';
                sublist.style.left = '0px'
            }
            else {
                sublist.style.top = '0px';
                sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
            }
        }
    }

    onItemMouseLeave(event: Event) {
        this.activeItem = null;
    }

    itemClick(event: any, item: MenuItem) {
        console.log('Click Invoked');
        if (item.disabled) {
            event.preventDefault();
            return;
        }

        if (!item.url) {
            event.preventDefault();
        }

        if (item.command) {
            if (!item.eventEmitter) {
                item.eventEmitter = new EventEmitter();
                item.eventEmitter.subscribe(item.command);
            }

            item.eventEmitter.emit({
                originalEvent: event,
                item: item
            });
        }

        this.activeItem = null;
    }

    listClick(event: any) {
        this.activeItem = null;
    }

}