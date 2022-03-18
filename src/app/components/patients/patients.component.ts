import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients.service';
import { Router } from '@angular/router';
import { style } from '@angular/animations';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  apiResult:any;
  patientList:any;
  entries:any;
  entry:any;
  linkUrlData:any;

  constructor(private patientsService:PatientsService,  public router: Router,) { }

  ngOnInit(): void {
    this.patientsService.getPatientDetails().subscribe((data => {
    this.apiResult = data;
    //console.log("patientID ==" + JSON.stringify(this.apiResult));
    this.patientList = this.apiResult.entry;
   }
   ));
   this.patientsService.getEntires().subscribe((data =>{
     this.entries = data;
     this.entry = this.entries.entries;
     }));

  }
  moreInfo(){
    this.router.navigate(['/patientDetails']);
  }

  linkRedirect(){
    this.patientsService.getEntires().subscribe(
      (data =>{
      this.entries = data;
      this.entries.entries.Link = this.linkUrlData;
      console.log("Clicking === " + JSON.stringify(this.linkUrlData) );})
      );
   
  }
}
