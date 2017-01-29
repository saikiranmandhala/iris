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
var core_1 = require("@angular/core");
var volatileConstants_sevice_1 = require("../services/volatileConstants.sevice");
var ButtonComponent = (function () {
    function ButtonComponent(volConstService) {
        this.volConstService = volConstService;
        this.label = 'Submit';
        this.iclass = 'btn btn-primary';
        this.iclick = new core_1.EventEmitter();
    }
    ButtonComponent.prototype.ngOnInit = function () { };
    ButtonComponent.prototype.generateActionId = function ($event) {
        $event.preventDefault();
        console.log('============Framework Starts===========');
        console.log('============Created new GUID===========');
        this.volConstService.newGUID();
        console.log(this.volConstService.actionGuid);
        this.iclick.emit($event);
        this.volConstService.nullifyGUID();
        console.log('============Removed GUID===========');
        console.log('============Framework Ends===========');
    };
    return ButtonComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "iclass", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ButtonComponent.prototype, "iclick", void 0);
ButtonComponent = __decorate([
    core_1.Component({
        //moduleId: module.id,
        selector: 'i-button',
        template: "\n<button class=\"{{iclass}}\" (click)=\"generateActionId($event)\">{{label}}</button>\n    "
    }),
    __metadata("design:paramtypes", [volatileConstants_sevice_1.VolatileConstants])
], ButtonComponent);
exports.ButtonComponent = ButtonComponent;
//# sourceMappingURL=button.component.js.map