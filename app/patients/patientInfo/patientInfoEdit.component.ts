import { Observable } from 'rxjs/Observable';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Response } from '@angular/http';
import { PatientsService } from '../../shared/services/patients.service';
import { Patient, Gender, Race } from '../../shared/models/patient';
import { Subscription } from "rxjs/Subscription";

@Component({
    selector: 'mrp-patient-edit',
    template: require('./patientInfoEdit.component.html')
})
export class PatientEditInfoComponent implements OnInit, OnDestroy {
    patient: Patient;
    races: string[] = Object.keys(Race).map(k => Race[k]);
    genders: string[] = Object.keys(Gender).map(k => Gender[k]);
    pageTitle: string;
    formType: string;
    addOrSave: string = "";
    error: string;
    isFieldDisabled: boolean;
    sub: Subscription;

    constructor(private router: Router, private route: ActivatedRoute, private patientService: PatientsService) { }

    ngOnInit() {
        this.patientService.changeEmitted$.subscribe(patient => this.patient = patient);
        this.sub = this.route.params.subscribe(params => this.determineFormType());
    }

    ngOnDestroy() {
        this.sub.unsubscribe();
    }

    addDiagnosis(): void {
        this.router.navigate(['./patientDiagnosisDetails/0']);
    }

    submit(): void {
        if (this.formType == "A") {
            this.patient.InclusionDate = new Date();
            this.patientService.addPatient(this.patient)
                .subscribe((res: Response) => {
                    if (res.ok) {
                        this.patientService.emitChange(this.patient);
                        this.router.navigate(['./patientInfo']);
                    }
                    else
                        this.error = "we're sorry, something is wrong with the information you entered!";
                }, (error: any) => this.error = "Server Error, Patient wasn't saved!");
        }
        else
            this.patientService.editPatient(this.patient)
                .subscribe((res: Response) => {
                    if (res.ok) {
                        let patient = new Patient().fromJSON(res.json());
                        this.patientService.emitChange(patient);
                        this.router.navigate(['./patientInfo']);
                    }
                    else
                        this.error = "we're sorry, something is wrong with the information you entered!";
                }, (error: any) => this.error = "Server Error, Patient wasn't saved!");

    }

    onBack(): void {
        if (this.formType == "A")
            this.router.navigate(['./findPatient']);
        else
            this.router.navigate(['./patientInfo']);
    }

    private determineFormType(): void {
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
            this.patient = new Patient();
            this.formType = "A";
            this.addOrSave = 'Add New';
            this.pageTitle = 'Add New Patient';
            this.isFieldDisabled = false;

            // var arr =
            //     [
            //         { "id": 1, "name": "Inclusion date", "description/full name": "Inclusion date", "type": "date", "range/options/default value": null, "dependency id": null, "dependency value": null },
            //         { "id": 2, "name": "Patient code", "description/full name": "Patient code", "type": "number", "range/options/default value": "", "dependency id": null, "dependency value": null },
            //         { "id": 3, "name": "Gender", "description/full name": "gender", "type": "selection", "range/options/default value": "Female/ Male", "dependency id": null, "dependency value": null },
            //         { "id": 4, "name": "Age", "description/full name": "Age (years)", "type": "number", "range/options/default value": "0-99", "dependency id": null, "dependency value": null },
            //         { "id": 5, "name": "Race", "description/full name": "Race", "type": "selection", "range/options/default value": "Not specified, Asian, Caucasian, Black, Romani, Arabian, Latin America, Others", "dependency id": null, "dependency value": null },
            //         { "id": 6, "name": "Others", "description/full name": "Others", "type": "Text", "range/options/default value": null, "dependency id": "5", "dependency value": "Others" },
            //         { "id": 7, "name": "Waist circumference", "description/full name": "Waist circumference(cm)", "type": "number", "range/options/default value": "0-200", "dependency id": null, "dependency value": null },
            //         { "id": 8, "name": "General comments on the patient ", "description/full name": "General comments on the patient ", "type": "big text", "range/options/default value": null, "dependency id": null, "dependency value": null },
            //         { "id": 9, "name": "Concomitant therapy", "description/full name": "Concomitant therapy", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": null, "dependency value": null },
            //         { "id": 10, "name": "Corticosteroids ", "description/full name": "Corticosteroids ", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": "9", "dependency value": "yes" },
            //         { "id": 11, "name": "NSAID", "description/full name": "NSAID", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": "9", "dependency value": "yes" },
            //         { "id": 12, "name": "Antiplatelets", "description/full name": "Antiplatelets", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": "9", "dependency value": "yes" },
            //         { "id": 13, "name": "Were antiplatelets discontinued when anticoagulant therapy started?", "description/full name": "Were antiplatelets discontinued when anticoagulant therapy started?", "type": "boolean", "range/options/default value": "yes/ no", "dependency id": "12", "dependency value": "yes" },
            //         { "id": 14, "name": "Psychotropics", "description/full name": "Psychotropics", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": "9", "dependency value": "yes" },
            //         { "id": 15, "name": "Specify drugs", "description/full name": "Specify drugs (Active ingredients or Trademarks)", "type": "text", "range/options/default value": null, "dependency id": "14", "dependency value": "yes" },
            //         { "id": 16, "name": "Erythropoietin", "description/full name": "Erythropoietin", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": "9", "dependency value": "yes" },
            //         { "id": 17, "name": "Statins", "description/full name": "Statins", "type": "selection", "range/options/default value": "yes/ no/ not specified", "dependency id": "9", "dependency value": "yes" },
            //         { "id": 18, "name": "Drug ", "description/full name": "Drug (Active ingredient or Trademark)", "type": "text", "range/options/default value": null, "dependency id": "17", "dependency value": "yes" },
            //         { "id": 19, "name": "Dose/day", "description/full name": "Dose/day", "type": "number", "range/options/default value": "0-80", "dependency id": "17", "dependency value": "yes" },
            //         { "id": 20, "name": "Others", "description/full name": "Others", "type": "big text", "range/options/default value": null, "dependency id": "9", "dependency value": "yes" }
            //     ]

        }
    }

}
