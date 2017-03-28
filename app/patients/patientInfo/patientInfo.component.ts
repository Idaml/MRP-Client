import { MedicalInstitution } from './../../shared/models/medicalInstitution';
import { PatientDiagnosis } from './../../shared/models/patientDiagnosis';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { PatientsService } from './../../shared/services/patients.service';
import { Patient, Race, Gender } from '../../shared/models/patient';

@Component({
    template: require('./patientInfo.component.html'),
    styles: [require('./patientInfo.component.css')]
})
export class PatientInfoComponent {
    pageTitle: string = 'Patient Detail';
    races: string[] = Object.keys(Race).map(k => Race[k]);
    genders: string[] = Object.keys(Gender).map(k => Gender[k]);
    patient: Patient;
    errorMessage: string;
    filterQuery: string = "";
    rowsOnPage: number = 10;
    sortBy: string = "date";
    sortOrder: string = "desc";
    showDiagnosis: boolean;

    constructor(private router: Router, private patientsService: PatientsService) {
        this.patientsService.changeEmitted$.subscribe(patient => {
            this.patient = patient;
            this.showDiagnosis = patient && patient.Diagnosis && patient.Diagnosis.length > 0;
        });
    }

    ngOnInit(): void {
        if (!(this.patient && this.patient.PatientId))
            this.router.navigate(['./findPatient']);
    }

    openDetails(diagnosisNum: number): void {
        this.router.navigate(['./patientDiagnosisDetails/' + diagnosisNum]);
    }

    removeDiagnosis(diagnosisNum: number): void {
        console.log(diagnosisNum);
    }
}
