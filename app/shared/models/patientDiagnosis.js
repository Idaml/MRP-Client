"use strict";
var medicalInstitution_1 = require('./medicalInstitution');
var PatientDiagnosis = (function () {
    function PatientDiagnosis(pid) {
        this.MedicalInstitution = new medicalInstitution_1.MedicalInstitution();
        this.DiagnosisDate = null;
        this.DischargeDate = null;
        this.InclusionDate = null;
        this.Symptoms = {};
        this.PatientId = pid;
    }
    PatientDiagnosis.prototype.fromJSON = function (json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    };
    return PatientDiagnosis;
}());
exports.PatientDiagnosis = PatientDiagnosis;
//# sourceMappingURL=patientDiagnosis.js.map