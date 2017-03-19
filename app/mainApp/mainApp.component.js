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
var enumToOptionsFilter_pipe_1 = require('../shared/components/enumToOptionsFilter.pipe');
var patientsFormSchema_service_1 = require('../shared/services/patientsFormSchema.service');
var patients_service_1 = require('../shared/services/patients.service');
var users_service_1 = require('../shared/services/users.service');
var config_1 = require('../shared/config');
var MainAppComponent = (function () {
    function MainAppComponent(router, usersService) {
        var _this = this;
        this.router = router;
        this.usersService = usersService;
        this.pageTitle = 'Medical Research Project';
        this.loggedIn = false;
        this.usersService.changeEmitted$.subscribe(function (user) { return _this.login(user); });
    }
    MainAppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var isLogin = this.router.url.includes('login') || this.router.url === '/';
        if (!this.loggedInUser && sessionStorage.getItem("token") && !isLogin) {
            this.usersService.getLoggedUser().subscribe(function (r) { return r; }, function (error) { return _this.logout(1); });
        }
    };
    MainAppComponent.prototype.login = function (user) {
        if (user) {
            this.loggedIn = true;
            this.loggedInUser = user;
            this.loginTitle = 'hello ' + user.FullName;
        }
    };
    MainAppComponent.prototype.logout = function (id) {
        this.loggedIn = false;
        this.usersService.logout();
        this.router.navigate(['/logout/' + (id || '0')]);
    };
    MainAppComponent = __decorate([
        core_1.Component({
            selector: 'mrp-main-app',
            moduleId: module.id,
            templateUrl: './mainApp.component.html',
            styleUrls: ['./mainApp.component.css'],
            providers: [patients_service_1.PatientsService, users_service_1.UsersService, patientsFormSchema_service_1.PatientsFormSchemaService, enumToOptionsFilter_pipe_1.EnumToOptionsFilter, config_1.CONFIG]
        }), 
        __metadata('design:paramtypes', [router_1.Router, users_service_1.UsersService])
    ], MainAppComponent);
    return MainAppComponent;
}());
exports.MainAppComponent = MainAppComponent;
//# sourceMappingURL=mainApp.component.js.map