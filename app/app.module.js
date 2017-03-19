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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
var material_1 = require('@angular/material');
var angular2_datatable_1 = require('angular2-datatable');
var core_2 = require("@ng2-dynamic-forms/core");
var ui_bootstrap_1 = require("@ng2-dynamic-forms/ui-bootstrap");
var app_component_1 = require('./app.component');
var mainApp_component_1 = require('./mainApp/mainApp.component');
var loginRegister_component_1 = require('./loginRegistration/loginRegister.component');
var logout_component_1 = require('./loginRegistration/logout.component');
var enumToOptionsFilter_pipe_1 = require('./shared/components/enumToOptionsFilter.pipe');
var equalValidator_directive_1 = require('./loginRegistration/shared/equalValidator.directive');
var patientInfo_component_1 = require('./patients/patientInfo/patientInfo.component');
var patientInfoEdit_component_1 = require('./patients/patientInfo/patientInfoEdit.component');
var tab_component_1 = require('./shared/components/tabs/tab.component');
var tabs_component_1 = require('./shared/components/tabs/tabs.component');
var patient_diagnosisDetails_component_1 = require('./patients/patientInfo/patient.diagnosisDetails.component');
var findPatient_component_1 = require('./patients/findPatient/findPatient.component');
var canActivateOAuthGuard_1 = require('./shared/services/canActivateOAuthGuard');
var dataFilter_pipe_1 = require('./shared/components/dataFilter.pipe');
var canDeactivateFormEditGuard_1 = require("./shared/services/canDeactivateFormEditGuard");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                angular2_datatable_1.DataTableModule,
                material_1.MaterialModule.forRoot(),
                forms_1.ReactiveFormsModule,
                core_2.DynamicFormsCoreModule.forRoot(),
                ui_bootstrap_1.DynamicFormsBootstrapUIModule,
                router_1.RouterModule.forRoot([
                    { path: 'login', component: loginRegister_component_1.LoginRegisterComponent },
                    { path: 'login/:form', component: loginRegister_component_1.LoginRegisterComponent },
                    { path: 'register', redirectTo: 'login/1', pathMatch: 'full' },
                    { path: 'passwordrecovery', redirectTo: 'login/2', pathMatch: 'full' },
                    { path: 'logout/:id', component: logout_component_1.LogoutComponent },
                    { path: 'patientInfo', component: patientInfo_component_1.PatientInfoComponent, canActivate: [canActivateOAuthGuard_1.CanActivateOAuthGuard] },
                    { path: 'patientEdit/:id', component: patientInfoEdit_component_1.PatientEditInfoComponent, canActivate: [canActivateOAuthGuard_1.CanActivateOAuthGuard] },
                    { path: 'patientDiagnosisDetails/:id', component: patient_diagnosisDetails_component_1.PatientDiagnosisDetailsComponent, canActivate: [canActivateOAuthGuard_1.CanActivateOAuthGuard], canDeactivate: [canDeactivateFormEditGuard_1.CanDeactivateDiagnosisFormGuard] },
                    { path: 'findPatient', component: findPatient_component_1.FindPatientComponent, canActivate: [canActivateOAuthGuard_1.CanActivateOAuthGuard] },
                    // {path: 'userManagment', component: UnderConstructionComponent, canActivate : [CanActivateOAuthGuard]},
                    // {path: 'research', component: UnderConstructionComponent, canActivate : [CanActivateOAuthGuard]},
                    // {path: 'personalInfo', component: UnderConstructionComponent, canActivate : [CanActivateOAuthGuard]},
                    // {path: '', redirectTo: 'findPatient', pathMatch:'full', canActivate : [CanActivateOAuthGuard]},
                    // {path: '**', redirectTo: 'findPatient', pathMatch:'full', canActivate : [CanActivateOAuthGuard]},
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    { path: '**', redirectTo: 'login', pathMatch: 'full' }
                ])
            ],
            declarations: [app_component_1.AppComponent,
                mainApp_component_1.MainAppComponent,
                loginRegister_component_1.LoginRegisterComponent,
                logout_component_1.LogoutComponent,
                equalValidator_directive_1.EqualValidator,
                patientInfo_component_1.PatientInfoComponent,
                patientInfoEdit_component_1.PatientEditInfoComponent,
                patient_diagnosisDetails_component_1.PatientDiagnosisDetailsComponent,
                findPatient_component_1.FindPatientComponent,
                tab_component_1.TabComponent,
                tabs_component_1.TabsComponent,
                enumToOptionsFilter_pipe_1.EnumToOptionsFilter,
                dataFilter_pipe_1.DataFilterPipe
            ],
            providers: [canActivateOAuthGuard_1.CanActivateOAuthGuard, canDeactivateFormEditGuard_1.CanDeactivateDiagnosisFormGuard],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map