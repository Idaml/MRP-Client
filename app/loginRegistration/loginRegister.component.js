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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var registrationInfo_1 = require('./shared/registrationInfo');
var loginInfo_1 = require('./shared/loginInfo');
var recoveryInfo_1 = require('./shared/recoveryInfo');
var users_service_1 = require('../shared/services/users.service');
var LoginRegisterComponent = (function () {
    function LoginRegisterComponent(_usersService, _route, _router) {
        this._usersService = _usersService;
        this._route = _route;
        this._router = _router;
        this.pageTitle = 'Login Page';
        this.activeForm = 0;
        this.logInfo = new loginInfo_1.LoginInfo();
        this.regInfo = new registrationInfo_1.RegistrationInfo();
        this.recInfo = new recoveryInfo_1.RecoveryInfo();
        var id = +this._route.snapshot.params['form'];
        if (id >= 0 && id < 3)
            this.activeForm = id;
    }
    LoginRegisterComponent.prototype.submit = function () {
        var _this = this;
        if (this.activeForm == 0) {
            this._usersService.loginSubmit(this.logInfo)
                .subscribe(function (res) { return res.ok ? _this.saveLoginInfo(res.json()) : _this.errorMsg = res.json().error; }, function (error) { return _this.errorMsg = error; });
        }
        else if (this.activeForm == 1) {
            this._usersService.registrationSubmit(this.regInfo)
                .subscribe(function (res) { return res.ok ? _this.activeForm = 0 : _this.errorMsg = 'Registration Failed'; }, function (error) { return _this.errorMsg = error; });
        }
        else {
            this._usersService.recoverySubmit(this.recInfo)
                .subscribe(function (res) { return res.ok ? _this.errorMsg = 'new password has been sent to your email' : _this.errorMsg = 'Recovery Failed'; }, function (error) { return _this.errorMsg = error; });
        }
    };
    LoginRegisterComponent.prototype.saveLoginInfo = function (res) {
        sessionStorage.setItem('token', JSON.stringify({ token: res.access_token, username: this.logInfo.Username }));
        this._router.navigate(['./findPatient']);
    };
    LoginRegisterComponent = __decorate([
        core_1.Component({
            selector: 'mrp-loginRegister',
            template: require('./loginRegister.component.html'),
            styles: [require('./loginRegister.component.css')]
        }), 
        __metadata('design:paramtypes', [users_service_1.UsersService, router_1.ActivatedRoute, router_1.Router])
    ], LoginRegisterComponent);
    return LoginRegisterComponent;
}());
exports.LoginRegisterComponent = LoginRegisterComponent;
//# sourceMappingURL=loginRegister.component.js.map