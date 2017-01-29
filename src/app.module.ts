import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ButtonComponent } from "./ButtonComponent/button.component"
import {VolatileConstants} from "./services/volatileConstants.sevice"
;
@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [VolatileConstants],
    bootstrap: [AppComponent]
})
export class AppModule { }