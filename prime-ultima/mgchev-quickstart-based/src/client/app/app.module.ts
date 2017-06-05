import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AboutModule } from './about/about.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';

import { CaseComponent } from './case/case.component';

import { appRoutes} from './app.routes';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
import { AppMenuComponent } from './app-menu/app-menu.component';

@NgModule({
  imports: [BrowserModule, HttpModule, AppRoutingModule, AboutModule, HomeModule, SharedModule.forRoot()],
  declarations: [AppComponent,
  CaseComponent,
    AppTopbarComponent,
    AppMenuComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]

})
export class AppModule { }
