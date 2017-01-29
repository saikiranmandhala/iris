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
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var IRISLogger = (function () {
    // I initialize the service.
    function IRISLogger(http) {
        this.http = http;
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // Lets log the given error to various aggregation and tracking services.
    IRISLogger.prototype.logError = function (error) {
        // Internal tracking.
        this.sendToConsole(error);
        this.sendToServer(error);
    };
    // ---
    // PRIVATE METHODS.
    // ---
    // Lets send the error the browser console (safely, if it exists).
    IRISLogger.prototype.sendToConsole = function (error) {
        if (console && console.group && console.error) {
            console.group("Error Log Service");
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    };
    // I send the error to the server-side error tracking end-point.
    IRISLogger.prototype.sendToServer = function (error) {
        this.http.post("./logError", {
            type: error.name,
            message: error.message,
            stack: error.stack,
            location: window.location.href
        })
            .subscribe(function (httpResponse) {
        }, function (httpError) {
            console.log("Http error:", httpError);
        });
    };
    return IRISLogger;
}());
IRISLogger = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], IRISLogger);
exports.IRISLogger = IRISLogger;
//# sourceMappingURL=irisLogger.service.js.map