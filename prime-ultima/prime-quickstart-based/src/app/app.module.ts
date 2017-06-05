import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';

import { InputTextModule, ButtonModule, MenuModule, MenuItem } from 'primeng/primeng';
import { AppTopbarComponent } from './app-topbar/app-topbar.component';
// import { AppMenuComponent } from './app-menu/app-menu.component';
import { AppMenuComponent } from './my-menu/my-menu.component';
import { AppSubMenuComponent } from './app-sub-menu/app-sub-menu.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [BrowserModule, BrowserAnimationsModule, FormsModule,
    AppRoutingModule,
    InputTextModule, ButtonModule, MenuModule],
  declarations: [AppComponent, AppTopbarComponent, AppMenuComponent, AppSubMenuComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
