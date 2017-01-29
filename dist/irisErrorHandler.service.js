"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// Import the core angular services.
var core_1 = require("@angular/core");
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
// Import the application components and services.
var irisLogger_service_1 = require("./irisLogger.service");
exports.LOGGING_ERROR_HANDLER_OPTIONS = {
    rethrowError: false,
    unwrapError: false
};
var IRISErrorHandler = (function () {
    // Lets initialize the service.
    // --
    // CAUTION: The core implementation of the ErrorHandler class accepts a boolean
    // parameter, `rethrowError`; however, this is not part of the interface for the
    // class. In our version, we are supporting that same concept; but, we are doing it
    // through an Options object (which is being defaulted in the providers).
    function IRISErrorHandler(errorLogService, options) {
        this.errorLogService = errorLogService;
        this.options = options;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I handle the given error.
    IRISErrorHandler.prototype.handleError = function (error) {
        // Log to the console.
        try {
            console.group("ErrorHandler");
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
        catch (handlingError) {
            console.group("ErrorHandler");
            console.warn("Error when trying to output error.");
            console.error(handlingError);
            console.groupEnd();
        }
        // Send to the error-logging service.
        try {
            this.options.unwrapError
                ? this.errorLogService.logError(this.findOriginalError(error))
                : this.errorLogService.logError(error);
        }
        catch (loggingError) {
            console.group("ErrorHandler");
            console.warn("Error when trying to log error to", this.errorLogService);
            console.error(loggingError);
            console.groupEnd();
        }
        if (this.options.rethrowError) {
            throw (error);
        }
    };
    // ---
    // PRIVATE METHODS.
    // ---
    // I attempt to find the underlying error in the given Wrapped error.
    IRISErrorHandler.prototype.findOriginalError = function (error) {
        while (error && error.originalError) {
            error = error.originalError;
        }
        return (error);
    };
    return IRISErrorHandler;
}());
IRISErrorHandler = __decorate([
    core_3.Injectable(),
    __param(1, core_2.Inject(exports.LOGGING_ERROR_HANDLER_OPTIONS)),
    __metadata("design:paramtypes", [irisLogger_service_1.IRISLogger, Object])
], IRISErrorHandler);
exports.IRISErrorHandler = IRISErrorHandler;
// I am the collection of providers used for this service at the module level.
// Notice that we are overriding the CORE ErrorHandler with our own class definition.
// --
// CAUTION: These are at the BOTTOM of the file so that we don't have to worry about
// creating futureRef() and hoisting behavior.
exports.LOGGING_ERROR_HANDLER_PROVIDERS = [
    {
        provide: exports.LOGGING_ERROR_HANDLER_OPTIONS,
        useValue: exports.LOGGING_ERROR_HANDLER_OPTIONS
    },
    {
        provide: core_1.ErrorHandler,
        useClass: IRISErrorHandler
    }
];
//# sourceMappingURL=irisErrorHandler.service.js.map