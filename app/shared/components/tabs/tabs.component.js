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
var TabsComponent = (function () {
    function TabsComponent() {
        //@ContentChildren(TabComponent) tabs: QueryList<TabComponent>;
        this.tabs = [];
    }
    // contentChildren are set
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        //let activeTabs = this.tabs.filter((tab)=>tab.active);
        // if there is no active tab set, activate the first
        // if(this.tabs.length > 0 && activeTabs.length === 0) {
        //   this.selectTab(this.tabs[0]);
        // }
    };
    TabsComponent.prototype.addTab = function (tab) {
        if (this.tabs.length === 0) {
            tab.active = true;
        }
        this.tabs.push(tab);
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.forEach(function (tab) {
            tab.active = false;
        });
        // activate the tab the user has clicked on.
        tab.active = true;
    };
    TabsComponent = __decorate([
        core_1.Component({
            selector: 'tabs',
            styles: [' li{ cursor: pointer; }'],
            template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a>{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n   "
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
}());
exports.TabsComponent = TabsComponent;
//# sourceMappingURL=tabs.component.js.map