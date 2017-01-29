import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ButtonComponent } from "./ButtonComponent/button.component";
import { VolatileConstants } from "./services/volatileConstants.sevice";
import { IRISLogger } from "./irisLogger.service";
import { IRISErrorHandler, LOGGING_ERROR_HANDLER_PROVIDERS, LOGGING_ERROR_HANDLER_OPTIONS } from "./irisErrorHandler.service";

@NgModule({
    declarations: [
        AppComponent,
        ButtonComponent
    ],
    imports: [BrowserModule, FormsModule, HttpModule],
    providers: [VolatileConstants,
        IRISLogger,
        // CAUTION: This providers collection overrides the CORE ErrorHandler with our
        // custom version of the service that logs errors to the IRISLogger.
        LOGGING_ERROR_HANDLER_PROVIDERS,
        // OPTIONAL: By default, our custom LoggingErrorHandler has behavior around
        // rethrowing and / or unwrapping errors. In order to facilitate dependency-
        // injection instead of resorting to the use of a Factory for instantiation,
        // these options can be overridden in the providers collection.
        {
            provide: LOGGING_ERROR_HANDLER_OPTIONS,
            useValue: {
                rethrowError: false,
                unwrapError: false
            }
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }