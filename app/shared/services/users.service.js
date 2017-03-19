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
var BehaviorSubject_1 = require('rxjs/BehaviorSubject');
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
require('rxjs/add/operator/map');
require('rxjs/add/operator/catch');
var config_1 = require('../config');
var user_1 = require('../models/user');
var UsersService = (function () {
    function UsersService(_http, config) {
        this._http = _http;
        this.config = config;
        this.emitChangeSource = new BehaviorSubject_1.BehaviorSubject(null);
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this._url = this.config.apiUrl + "api/Accounts";
    }
    UsersService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    UsersService.prototype.loginSubmit = function (logInfo) {
        var _this = this;
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        var body = "userName=" + logInfo.Username + "&password=" + logInfo.Password + "&grant_type=password";
        return this._http.post(this._url + "/Token", body, options)
            .map(function (response) { _this.getLoggedUser(logInfo.Username, response.json().access_token).subscribe(); return response; })
            .catch(this._handleError);
    };
    UsersService.prototype.registrationSubmit = function (regInfo) {
        return this._http.post(this._url + "/Register", regInfo)
            .map(function (response) { return response; })
            .catch(this._handleError);
    };
    UsersService.prototype.recoverySubmit = function (recInfo) {
        return this._http.post(this._url + "/PasswordRecovery", recInfo)
            .map(function (response) { return response; })
            .catch(this._handleError);
    };
    UsersService.prototype.getLoggedUser = function (username, token) {
        var _this = this;
        if (username === void 0) { username = null; }
        if (token === void 0) { token = null; }
        var accessToken = token || JSON.parse(sessionStorage.getItem('token')).token;
        var un = username || JSON.parse(sessionStorage.getItem('token')).username;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers, });
        return this._http.get(this._url + "/GetUser?username=" + un, options)
            .map(function (response) {
            _this.emitChange(new user_1.User().fromJSON(response.json()));
            return response;
        })
            .catch(this._handleError);
    };
    UsersService.prototype.logout = function () {
        sessionStorage.removeItem('token');
    };
    UsersService.prototype._handleError = function (error) {
        console.error(error);
        var jError = error.json();
        return Observable_1.Observable.throw(jError.message || jError.error_description || jError.error || 'server error');
    };
    UsersService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_1.CONFIG])
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map