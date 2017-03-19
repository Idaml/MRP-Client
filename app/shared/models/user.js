"use strict";
var User = (function () {
    function User() {
        this.DateOfBirth = null;
    }
    User.prototype.fromJSON = function (json) {
        for (var propName in json)
            this[propName] = json[propName];
        return this;
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map