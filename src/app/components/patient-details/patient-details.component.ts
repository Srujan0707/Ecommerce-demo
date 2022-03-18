import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
  }
  backToPage(){
this.router.navigate(['/patients']);
  }
}
