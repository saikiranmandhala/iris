"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var VolatileConstants = (function () {
    function VolatileConstants() {
        this.actionGuid = '';
    }
    VolatileConstants.prototype.newGUID = function () {
        this.actionGuid =
            this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' +
                this.s4() + '-' + this.s4() + this.s4() + this.s4();
        return this.actionGuid;
    };
    VolatileConstants.prototype.s4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    VolatileConstants.prototype.nullifyGUID = function () {
        this.actionGuid = '';
    };
    return VolatileConstants;
}());
VolatileConstants = __decorate([
    core_1.Injectable()
], VolatileConstants);
exports.VolatileConstants = VolatileConstants;
//# sourceMappingURL=volatileConstants.sevice.js.map