"use strict";
var Patient = (function () {
    function Patient() {
        this.DateOfBirth = null;
        this.InclusionDate = null;
        this.Diagnosis = new Array();
    }
    Patient.prototype.fromJSON = function (json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    };
    return Patient;
}());
exports.Patient = Patient;
(function (Gender) {
    Gender[Gender["Male"] = 0] = "Male";
    Gender[Gender["Female"] = 1] = "Female";
})(exports.Gender || (exports.Gender = {}));
var Gender = exports.Gender;
(function (Race) {
    Race[Race["Caucasian"] = 0] = "Caucasian";
    Race[Race["Black"] = 1] = "Black";
    Race[Race["Latino"] = 2] = "Latino";
    Race[Race["Asian"] = 3] = "Asian";
    Race[Race["Other"] = 4] = "Other";
})(exports.Race || (exports.Race = {}));
var Race = exports.Race;
//# sourceMappingURL=patient.js.map