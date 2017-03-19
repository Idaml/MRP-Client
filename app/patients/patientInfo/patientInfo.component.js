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
var patients_service_1 = require('./../../shared/services/patients.service');
var patient_1 = require('../../shared/models/patient');
var PatientInfoComponent = (function () {
    function PatientInfoComponent(router, patientsService) {
        var _this = this;
        this.router = router;
        this.patientsService = patientsService;
        this.pageTitle = 'Patient Detail';
        this.races = Object.keys(patient_1.Race).map(function (k) { return patient_1.Race[k]; });
        this.genders = Object.keys(patient_1.Gender).map(function (k) { return patient_1.Gender[k]; });
        this.filterQuery = "";
        this.rowsOnPage = 10;
        this.sortBy = "date";
        this.sortOrder = "desc";
        this.patientsService.changeEmitted$.subscribe(function (patient) {
            _this.patient = patient;
            _this.showDiagnosis = patient && patient.Diagnosis && patient.Diagnosis.length > 0;
        });
    }
    PatientInfoComponent.prototype.ngOnInit = function () {
        if (!(this.patient && this.patient.PatientId))
            this.router.navigate(['./findPatient']);
    };
    PatientInfoComponent.prototype.openDetails = function (diagnosisNum) {
        this.router.navigate(['./patientDiagnosisDetails/' + diagnosisNum]);
    };
    PatientInfoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: './patientInfo.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, patients_service_1.PatientsService])
    ], PatientInfoComponent);
    return PatientInfoComponent;
}());
exports.PatientInfoComponent = PatientInfoComponent;
//# sourceMappingURL=patientInfo.component.js.map