"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var button_component_1 = require("./ButtonComponent/button.component");
var volatileConstants_sevice_1 = require("./services/volatileConstants.sevice");
var irisLogger_service_1 = require("./irisLogger.service");
var irisErrorHandler_service_1 = require("./irisErrorHandler.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            button_component_1.ButtonComponent
        ],
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule],
        providers: [volatileConstants_sevice_1.VolatileConstants,
            irisLogger_service_1.IRISLogger,
            // CAUTION: This providers collection overrides the CORE ErrorHandler with our
            // custom version of the service that logs errors to the IRISLogger.
            irisErrorHandler_service_1.LOGGING_ERROR_HANDLER_PROVIDERS,
            // OPTIONAL: By default, our custom LoggingErrorHandler has behavior around
            // rethrowing and / or unwrapping errors. In order to facilitate dependency-
            // injection instead of resorting to the use of a Factory for instantiation,
            // these options can be overridden in the providers collection.
            {
                provide: irisErrorHandler_service_1.LOGGING_ERROR_HANDLER_OPTIONS,
                useValue: {
                    rethrowError: false,
                    unwrapError: false
                }
            }
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map