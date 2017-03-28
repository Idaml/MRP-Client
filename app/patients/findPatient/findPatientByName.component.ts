import { Router } from '@angular/router';
import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Patient } from '../../shared/models/patient';
import { User } from '../../shared/models/user';
import { PatientsService } from '../../shared/services/patients.service';
import { FindPatientModel } from './findPatientModel';
import { FormArray, FormGroup, FormControl } from '@angular/forms';

@Component({
    template: require('./findPatientByName.component.html'),
    styles: [require('./findPatient.component.css')]
})

export class FindPatientByNameComponent {
    patient: FindPatientModel = new FindPatientModel();
    loggedInUser: User;
    pageTitle: string = "Find patient by name";
    error: string;
    patientList: Patient[];


    constructor(private patientsService: PatientsService, private router: Router) {
        this.patient.Name = "";
        this.patientList = new Array<Patient>();
    }

    find(): void {
        if (this.patient.Name == "" || this.patientList != null) {
            this.patientList = new Array<Patient>();
        }
        if (this.error != "")
            this.error = "";
        this.patientsService.getPatients(this.patient)
            .subscribe(response => {
                this.convertToArray(response);
            }, error => {
                console.log(error);
                this.error = "server error!"
            });
    }

    convertToArray(patient: Patient): void {
        for (let key in patient) {
            var item = {};
            item[key] = patient[key];
            if (patient[key]) {
                this.patientList.push(item[key]);
            }
        }
    }

    private navigationAddress(patients: Patient): string {
        if (patients)
            return 'patientInfo';
        else
            this.error = "no patients found!";
    }

    openDetails(patient:Patient): void {
        this.patientsService.getPatients(patient)
            .subscribe(response => {
                if (response[0]) {
                    let patient = new Patient().fromJSON(response[0]);
                    console.log(patient);
                    this.patientsService.emitChange(patient);
                    this.router.navigate(['./' + this.navigationAddress(patient)]);
                }
            }, error => {
                console.log(error);
                this.error = "server error!"
            });
    }

    removePatient(patient:Patient): void {

    }

    onChange($event: any) {
        console.log("reach onChange!");
        this.find();
    }
}