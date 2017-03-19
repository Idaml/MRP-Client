"use strict";
var MedicalInstitution = (function () {
    function MedicalInstitution() {
    }
    MedicalInstitution.prototype.fromJSON = function (json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    };
    return MedicalInstitution;
}());
exports.MedicalInstitution = MedicalInstitution;
//# sourceMappingURL=medicalInstitution.js.map