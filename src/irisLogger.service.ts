import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Response } from "@angular/http";

@Injectable()
export class IRISLogger {

    private http: Http;

    // I initialize the service.
    constructor(http: Http) {
        this.http = http;
    }

    // ---
    // PUBLIC METHODS.
    // ---

    // Lets log the given error to various aggregation and tracking services.
    public logError(error: any): void {
        // Internal tracking.
        this.sendToConsole(error);
        this.sendToServer(error);
    }


    // ---
    // PRIVATE METHODS.
    // ---

    // Lets send the error the browser console (safely, if it exists).
    private sendToConsole(error: any): void {
        if (console && console.group && console.error) {
            console.group("Error Log Service");
            console.error(error);
            console.error(error.message);
            console.error(error.stack);
            console.groupEnd();
        }
    }


    // I send the error to the server-side error tracking end-point.
    private sendToServer(error: any): void {
        this.http.post("./logError",
            {
                type: error.name,
                message: error.message,
                stack: error.stack,
                location: window.location.href
            })
            .subscribe((httpResponse: Response): void => {

            },
            (httpError: any): void => {
                console.log("Http error:", httpError);
            });
    }
}