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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var LogoutComponent = (function () {
    function LogoutComponent(_route) {
        this._route = _route;
        var id = +this._route.snapshot.params['id'];
        if (id === 0)
            this.mssg = "you have logged out successfully";
        else
            this.mssg = "we're sorry, for some reason we've lost your login credentials, please renew them by logging in.";
    }
    LogoutComponent = __decorate([
        core_1.Component({
            selector: 'mrp-logout',
            moduleId: module.id,
            templateUrl: './logout.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], LogoutComponent);
    return LogoutComponent;
}());
exports.LogoutComponent = LogoutComponent;
//# sourceMappingURL=logout.component.js.map