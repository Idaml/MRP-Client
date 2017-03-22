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
var patients_service_1 = require('../../shared/services/patients.service');
var patient_1 = require('../../shared/models/patient');
var PatientEditInfoComponent = (function () {
    function PatientEditInfoComponent(router, route, patientService) {
        this.router = router;
        this.route = route;
        this.patientService = patientService;
        this.races = Object.keys(patient_1.Race).map(function (k) { return patient_1.Race[k]; });
        this.genders = Object.keys(patient_1.Gender).map(function (k) { return patient_1.Gender[k]; });
        this.addOrSave = "";
    }
    PatientEditInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patientService.changeEmitted$.subscribe(function (patient) { return _this.patient = patient; });
        this.sub = this.route.params.subscribe(function (params) { return _this.determineFormType(); });
    };
    PatientEditInfoComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    PatientEditInfoComponent.prototype.addDiagnosis = function () {
        this.router.navigate(['./patientDiagnosisDetails/0']);
    };
    PatientEditInfoComponent.prototype.submit = function () {
        var _this = this;
        if (this.formType == "A") {
            this.patient.InclusionDate = new Date();
            this.patientService.addPatient(this.patient)
                .subscribe(function (res) {
                if (res.ok) {
                    _this.patientService.emitChange(_this.patient);
                    _this.router.navigate(['./patientInfo']);
                }
                else
                    _this.error = "we're sorry, something is wrong with the information you entered!";
            }, function (error) { return _this.error = "Server Error, Patient wasn't saved!"; });
        }
        else
            this.patientService.editPatient(this.patient)
                .subscribe(function (res) {
                if (res.ok) {
                    var patient = new patient_1.Patient().fromJSON(res.json());
                    _this.patientService.emitChange(patient);
                    _this.router.navigate(['./patientInfo']);
                }
                else
                    _this.error = "we're sorry, something is wrong with the information you entered!";
            }, function (error) { return _this.error = "Server Error, Patient wasn't saved!"; });
    };
    PatientEditInfoComponent.prototype.onBack = function () {
        if (this.formType == "A")
            this.router.navigate(['./findPatient']);
        else
            this.router.navigate(['./patientInfo']);
    };
    PatientEditInfoComponent.prototype.determineFormType = function () {
        console.log(this.patient);
        console.log(this.route.snapshot.params['id']);
        if (this.route.snapshot.params['id'] == 1 && this.patient && this.patient.PatientId) {
            this.formType = "E";
            this.addOrSave = 'Save Changes';
            this.pageTitle = 'Edit Details: ' + this.patient.Name;
            this.isFieldDisabled = true;
        }
        else if (!(this.patient && this.patient.PatientId))
            this.router.navigate(['./findPatient']);
        else {
            this.patient = new patient_1.Patient();
            this.formType = "A";
            this.addOrSave = 'Add New';
            this.pageTitle = 'Add New Patient';
            this.isFieldDisabled = false;
        }
    };
    PatientEditInfoComponent = __decorate([
        core_1.Component({
            selector: 'mrp-patient-edit',
            template: require('./patientInfoEdit.component.html')
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, patients_service_1.PatientsService])
    ], PatientEditInfoComponent);
    return PatientEditInfoComponent;
}());
exports.PatientEditInfoComponent = PatientEditInfoComponent;
//# sourceMappingURL=patientInfoEdit.component.js.map