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
//import { MY_DYNAMIC_FORM_MODEL } from '../models/schema.model';
var PatientsFormSchemaService = (function () {
    function PatientsFormSchemaService(_http) {
        this._http = _http;
        this._url = SERVER_URL + "api/PatientsFormSchema";
    }
    // SaveFirstSchema():Observable<any>{
    //     this.formModel = MY_DYNAMIC_FORM_MODEL;
    //     let json: string
    //     json = JSON.stringify(this.formModel).toString();
    //     let accessToken:string = JSON.parse(sessionStorage.getItem('token')).token;
    //     let headers: Headers = new Headers({'Authorization':'Bearer '+accessToken,'Content-Type':'application/json; charset=utf-8'});
    //     let options: RequestOptions = new RequestOptions({headers: headers});
    //     return this._http.post(this._url+"/SaveFirstSchema",json,options).map((res:Response) => res.json());
    // }
    PatientsFormSchemaService.prototype.GetFirstSchema = function () {
        var accessToken = JSON.parse(sessionStorage.getItem('token')).token;
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + accessToken });
        var options = new http_1.RequestOptions({ headers: headers });
        return this._http.get(this._url + "/GetFirstSchema", options).map(function (res) { return res.json(); });
    };
    PatientsFormSchemaService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PatientsFormSchemaService);
    return PatientsFormSchemaService;
}());
exports.PatientsFormSchemaService = PatientsFormSchemaService;
//# sourceMappingURL=patientsFormSchema.service.js.map