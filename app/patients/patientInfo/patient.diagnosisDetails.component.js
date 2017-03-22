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
var forms_1 = require('@angular/forms');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var core_2 = require("@ng2-dynamic-forms/core");
var patientsFormSchema_service_1 = require('./../../shared/services/patientsFormSchema.service');
var patients_service_1 = require('../../shared/services/patients.service');
var patient_1 = require('../../shared/models/patient');
var patientDiagnosis_1 = require('../../shared/models/patientDiagnosis');
var PatientDiagnosisDetailsComponent = (function () {
    function PatientDiagnosisDetailsComponent(router, route, patientsService, formsSchemaService, formsService) {
        this.router = router;
        this.route = route;
        this.patientsService = patientsService;
        this.formsSchemaService = formsSchemaService;
        this.formsService = formsService;
        this.disable = "";
        this.formGroup = new forms_1.FormGroup({});
    }
    PatientDiagnosisDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.formsSchemaService.GetFirstSchema().subscribe(function (res) {
            _this.formModel = _this.formsService.fromJSON(res);
            _this.formGroup = _this.formsService.createFormGroup(_this.formModel);
            _this.patientsService.changeEmitted$.subscribe(function (patient) {
                _this.patient = patient;
                _this.determineFormType();
                if (_this.formType == "E" && _this.diagnosis.Symptoms) {
                    for (var key in _this.formGroup.controls) {
                        _this.formGroup.controls[key].patchValue(_this.diagnosis.Symptoms);
                    }
                }
            });
        });
    };
    PatientDiagnosisDetailsComponent.prototype.submit = function () {
        var _this = this;
        if (this.formType == 'E') {
            this.patientsService.editDiagnosis(this.diagnosis).subscribe(function (res) {
                if (res.ok) {
                    var patient = new patient_1.Patient().fromJSON(res.json());
                    _this.patientsService.emitChange(patient);
                    _this.onSuccessfulSave();
                }
                else
                    _this.error = "we're sorry, something is wrong with the information you entered!";
            }, function (error) { return _this.error = "server error!"; });
        }
        else {
            this.diagnosis.Id = this.patient.Diagnosis.length;
            this.patient.Diagnosis.push(this.diagnosis);
            this.patientsService.addDiagnosis(this.diagnosis).subscribe(function (res) {
                res.ok ? _this.onSuccessfulSave() : _this.error = "we're sorry, something is wrong with the information you entered!";
            }, function (error) { return _this.error = "server error!"; });
        }
    };
    PatientDiagnosisDetailsComponent.prototype.onSuccessfulSave = function () {
        this.formGroup.reset();
        this.router.navigate(['./patientInfo']);
    };
    PatientDiagnosisDetailsComponent.prototype.determineFormType = function () {
        var id = +this.route.snapshot.params['id'];
        if (id <= 0 || !(this.patient && this.patient.Diagnosis && this.patient.Diagnosis.length >= id)) {
            this.diagnosis = new patientDiagnosis_1.PatientDiagnosis(this.patient.PatientId);
            this.pageTitle = 'new Diagnosis for ' + this.patient.Name;
            this.formType = 'A';
        }
        else {
            this.diagnosis = this.patient.Diagnosis[id - 1];
            this.pageTitle = 'Edit Diagnosis for ' + this.patient.Name;
            this.disable = 'disabled';
            this.formType = 'E';
        }
    };
    PatientDiagnosisDetailsComponent.prototype.onChange = function ($event) {
        this.diagnosis.Symptoms[$event.model.id] = $event.model._value;
    };
    PatientDiagnosisDetailsComponent = __decorate([
        core_1.Component({
            selector: 'mrp-patient-diagnosis-details',
            template: require('./patient.diagnosisDetails.component.html')
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, patients_service_1.PatientsService, patientsFormSchema_service_1.PatientsFormSchemaService, core_2.DynamicFormService])
    ], PatientDiagnosisDetailsComponent);
    return PatientDiagnosisDetailsComponent;
}());
exports.PatientDiagnosisDetailsComponent = PatientDiagnosisDetailsComponent;
//# sourceMappingURL=patient.diagnosisDetails.component.js.map