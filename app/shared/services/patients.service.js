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
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var PatientsService = (function () {
    function PatientsService(_http) {
        this._http = _http;
        this.emitChangeSource = new BehaviorSubject_1.BehaviorSubject(null);
        // Observable string streams
        this.changeEmitted$ = this.emitChangeSource.asObservable();
        this._url = SERVER_URL + "api/Patients";
    }
    // Service message commands
    PatientsService.prototype.emitChange = function (change) {
        this.emitChangeSource.next(change);
    };
    PatientsService.prototype.getPatients = function (findPatientModel) {
        var accessToken = JSON.parse(sessionStorage.getItem('token')).token;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._url + "/GetPatients", findPatientModel, options)
            .map(function (response) { return response.json(); })
            .catch(this._handleError);
    };
    PatientsService.prototype.addPatient = function (patient) {
        var accessToken = JSON.parse(sessionStorage.getItem('token')).token;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._url + "/AddPatient", patient, options)
            .map(function (res) { return res; })
            .catch(this._handleError);
    };
    PatientsService.prototype.addDiagnosis = function (diagnosis) {
        var accessToken = JSON.parse(sessionStorage.getItem('token')).token;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.post(this._url + "/AddDiagnosis", diagnosis, options)
            .map(function (res) { return res; })
            .catch(this._handleError);
    };
    PatientsService.prototype.editPatient = function (patient) {
        var accessToken = JSON.parse(sessionStorage.getItem('token')).token;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._url + "/EditPatient", patient, options)
            .map(function (res) { return res; })
            .catch(this._handleError);
    };
    PatientsService.prototype.editDiagnosis = function (diagnosis) {
        var accessToken = JSON.parse(sessionStorage.getItem('token')).token;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.put(this._url + "/EditDiagnosis", diagnosis, options)
            .map(function (res) { return res; })
            .catch(this._handleError);
    };
    PatientsService.prototype._handleError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'server error');
    };
    PatientsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PatientsService);
    return PatientsService;
}());
exports.PatientsService = PatientsService;
//# sourceMappingURL=patients.service.js.map