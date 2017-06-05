import {Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate,Inject,forwardRef} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';
import {MenuItem} from 'primeng/primeng';
import {AppComponent} from '../app.component';

@Component({
    moduleId: module.id,
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.css']
})


@Component({
    selector: 'app-menu',
    template: `
        <ul app-submenu [item]="model" root="true" class="ultima-menu clearfix" [reset]="reset"></ul>
    `
})
export class AppMenuComponent implements OnInit {

    @Input() reset: boolean;

    model: MenuItem[];

    constructor(@Inject(forwardRef(() => AppComponent)) public app:AppComponent) {}
    
    ngOnInit() {
        this.model = [
            {label: 'Dashboard', icon: 'dashboard', routerLink: ['/']},
            {
                label: 'Components', icon: 'list',
                items: [
                    {label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']},
                    {label: 'Forms', icon: 'input', routerLink: ['/forms']},
                    {label: 'Data', icon: 'grid_on', routerLink: ['/data']},
                    {label: 'Panels', icon: 'content_paste', routerLink: ['/panels']},
                    {label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']},
                    {label: 'Menus', icon: 'menu', routerLink: ['/menus']},
                    {label: 'Messages', icon: 'message', routerLink: ['/messages']},
                    {label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']},
                    {label: 'File', icon: 'attach_file', routerLink: ['/file']},
                    {label: 'Misc', icon: 'toys', routerLink: ['/misc']}
                ]
            },
            {
                label: 'Template Pages', icon: 'get_app',
                items: [
                    {label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']},
                    {label: 'Landing Page', icon: 'flight_land', url: 'landing.html'},
                    {label: 'Login Page', icon: 'verified_user', url: 'login.html'},
                    {label: 'Error Page', icon: 'error', url: 'error.html'},
                    {label: '404 Page', icon: 'error_outline', url: '404.html'},
                    {label: 'Access Denied Page', icon: 'security', url: 'access.html'}
                ]
            },
            {
                label: 'Menu Hierarchy', icon: 'menu',
                items: [
                    {
                        label: 'Submenu 1', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 1.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.1.1', icon: 'subject'},
                                    {label: 'Submenu 1.1.2', icon: 'subject'},
                                    {label: 'Submenu 1.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 1.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 1.2.1', icon: 'subject'},
                                    {label: 'Submenu 1.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    },
                    {
                        label: 'Submenu 2', icon: 'subject',
                        items: [
                            {
                                label: 'Submenu 2.1', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.1.1', icon: 'subject'},
                                    {label: 'Submenu 2.1.2', icon: 'subject'},
                                    {label: 'Submenu 2.1.3', icon: 'subject'},
                                ]
                            },
                            {
                                label: 'Submenu 2.2', icon: 'subject',
                                items: [
                                    {label: 'Submenu 2.2.1', icon: 'subject'},
                                    {label: 'Submenu 2.2.2', icon: 'subject'}
                                ]
                            },
                        ]
                    }
                ]
            },
            {label: 'Utils', icon: 'build', routerLink: ['/utils']},
            {label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']}
        ];
    }
}