import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { LocalAPIService } from 'src/app/services/local-api.service';
import { EmployeeModel } from './employeeModelDashboard';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  display = "none";
  formValue !:FormGroup;
  employeeModelOjbect: EmployeeModel = new EmployeeModel();
  employeeData : any;
  showAddButton : any;
  showUpdateButton : any;
 
 constructor( private formBuilder:FormBuilder, private apiService:LocalAPIService,) { }
  
  ngOnInit(): void {

this.formValue = this.formBuilder.group({
  id : [''],
  firstName : [''],
  lastName :  [''],
  email : [''],
  mobileNumber : [''],
  salary : ['']
})    
this.getAllEmployee(); //loads the all employees data onces data enteries. 
  }

   openModal() {
    this.display = "block"; // for the modal open through JS => CSS => display:block
  }
  onCloseHandled() {
    this.display = "none"; //for the modal close through JS => CSS => display:none
  }

  clickAddEmployee(){
    this.display = "block"; // for the modal open through JS => CSS => display:block
    this.formValue.reset(); // for reset the form once open
    this.showAddButton = true; // Show the Add button and hide the update button while add the employee details in the model form
    this.showUpdateButton = false; // hide the Add button and show the update button while update the employee details in the model form
  }


  postEmployeeDetails(){
this.employeeModelOjbect.id = this.formValue.value.id;
this.employeeModelOjbect.firstName = this.formValue.value.firstName;
this.employeeModelOjbect.lastName = this.formValue.value.lastName;
this.employeeModelOjbect.email = this.formValue.value.email;
this.employeeModelOjbect.mobileNumber = this.formValue.value.mobileNumber;
this.employeeModelOjbect.salary = this.formValue.value.salary;
//this.employeeModelOjbect.address = {street : 'Shivarampally', city : 'Hyderabad', state : 'Telangana'};


this.apiService.postEmployee(this.employeeModelOjbect).subscribe(result => 
{
  console.log(result);
  alert("Employee Added Successfully");
  let reference = document.getElementById('cancel') 
  reference?.click();
  this.formValue.reset();
  this.getAllEmployee(); //for load the employee inserted data  
}, 
  error => {
  alert("Something Went Wrong (or) 'Open the == json-server --watch db.json' in the cmd");
})

  }

  getAllEmployee(){
    this.apiService.getEmployee(this.employeeModelOjbect).subscribe(result => 
  {
    this.employeeData = result;
    console.log(this.employeeData);
  })
  }

  deleteEmployee(employee:any){
    if(confirm("Are you Sure to Delete an Employee Details ?")){
      this.apiService.deleteEmployee(employee.id).subscribe(result =>
        {
    this.getAllEmployee(); //for load the employee deleted data 
          
        }
        )
      alert("Employee Data is Deleted Sucessfully");
        }
        else{
          alert("Employee Data is not Deleted");
          //employee data is not deleted ==> Fix this error
        }   
 
  }

onEditEmployee(employee:any){
this.display = "block";
this.employeeModelOjbect.id = employee.id;
this.showAddButton = false;
this.showUpdateButton = true;
this.formValue.controls['id'].setValue(employee.id);
this.formValue.controls['firstName'].setValue(employee.firstName);
this.formValue.controls['lastName'].setValue(employee.lastName);
this.formValue.controls['email'].setValue(employee.email);
this.formValue.controls['mobileNumber'].setValue(employee.mobileNumber);
this.formValue.controls['salary'].setValue(employee.salary);

  }

  updateEmployeeDetails(){
this.employeeModelOjbect.id = this.formValue.value.id;
this.employeeModelOjbect.firstName = this.formValue.value.firstName;
this.employeeModelOjbect.lastName = this.formValue.value.lastName;
this.employeeModelOjbect.email = this.formValue.value.email;
this.employeeModelOjbect.mobileNumber = this.formValue.value.mobileNumber;
this.employeeModelOjbect.salary = this.formValue.value.salary;
this.apiService.updateEmployee(this.employeeModelOjbect, this.employeeModelOjbect.id)
.subscribe(result=>{
  alert("Updated Successfully");
  let reference = document.getElementById('cancel') 
  reference?.click(); 
  this.formValue.reset();
  this.getAllEmployee(); //for load the employee inserted data  
})
  }


}
