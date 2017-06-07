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
    changeTheme(event: Event, theme: string) {
        let layOutLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-layout');
        let themeLink: HTMLLinkElement = <HTMLLinkElement>document.getElementById('theme-css');
        if (theme == 'cyan') {
            layOutLink.href = '/layout-purple-cyan.css';//assets/components/themes/' + theme + '/theme.css';
            themeLink.href = '/theme-purple-cyan.css';//'assets/components/themes/' + theme + '/theme.css';
        } else {
            layOutLink.href = '/layout-blue.css';//assets/components/themes/' + theme + '/theme.css';
            themeLink.href = '/theme-blue.css';//'assets/components/themes/' + theme + '/theme.css';
        }
        event.preventDefault();
    }
}
