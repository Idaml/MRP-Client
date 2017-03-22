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
var patient_1 = require('../../shared/models/patient');
var patients_service_1 = require('../../shared/services/patients.service');
var findPatientModel_1 = require('./findPatientModel');
var FindPatientComponent = (function () {
    function FindPatientComponent(patientsService, router) {
        this.patientsService = patientsService;
        this.router = router;
        this.patient = new findPatientModel_1.FindPatientModel();
        this.pageTitle = "Find Patient";
        this.patient.PatientId = '026606657';
    }
    FindPatientComponent.prototype.find = function () {
        var _this = this;
        this.patientsService.getPatients(this.patient)
            .subscribe(function (response) {
            if (response[0]) {
                var patient = new patient_1.Patient().fromJSON(response[0]);
                _this.patientsService.emitChange(patient);
                _this.router.navigate(['./' + _this.navigationAddress(patient)]);
            }
        }, function (error) {
            console.log(error);
            _this.error = "server error!";
        });
    };
    FindPatientComponent.prototype.navigationAddress = function (patients) {
        if (patients)
            return 'patientInfo';
        else
            this.error = "no patients found!";
    };
    FindPatientComponent = __decorate([
        core_1.Component({
            template: require('./findPatient.component.html')
        }), 
        __metadata('design:paramtypes', [patients_service_1.PatientsService, router_1.Router])
    ], FindPatientComponent);
    return FindPatientComponent;
}());
exports.FindPatientComponent = FindPatientComponent;
//# sourceMappingURL=findPatient.component.js.map