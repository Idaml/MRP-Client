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
var EnumToOptionsFilter = (function () {
    function EnumToOptionsFilter() {
    }
    EnumToOptionsFilter.prototype.transform = function (items) {
        // filter items array, items which match and return true will be kept, false will be filtered out
        return items.filter(function (item) { return typeof item === "number"; });
    };
    EnumToOptionsFilter = __decorate([
        core_1.Pipe({
            name: 'enumToOptions',
            pure: false
        }),
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], EnumToOptionsFilter);
    return EnumToOptionsFilter;
}());
exports.EnumToOptionsFilter = EnumToOptionsFilter;
//# sourceMappingURL=enumToOptionsFilter.pipe.js.map