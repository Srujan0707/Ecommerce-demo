import { Component, OnInit } from '@angular/core';
import { PrasticeproductsService } from 'src/app/services/prasticeproducts.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-prastice',
  templateUrl: './prastice.component.html',
  styleUrls: ['./prastice.component.css']
})

export class PrasticeComponent implements OnInit {

results:any;

urlTwo:any;

  constructor( private prasticeProductService:PrasticeproductsService) { }

  ngOnInit(): void {

//Getting the getmethod from the API 
this.prasticeProductService.getProductDetails().subscribe((data => {this.results = data;}));
//Getting the getmethod from the API 
this.prasticeProductService.detailsOfApi().subscribe((data => {
  //console.log("Data ==" + JSON.stringify(data));
  this.urlTwo = data;
  //console.log("Output==" + this.urlTwo);
// let a=0;
//   for (a=0; a<2; a++){
//     console.log("DataMeta ==" + JSON.stringify(this.urlTwo.link[a].relation));
 let a=0;
 let idLength:any
    for (a=0; a<this.urlTwo.entry[a].resource.id.length; a++){
    console.log("PatientId ==" + JSON.stringify(this.urlTwo.entry[a].resource.id));}

  

}));

  }

  restaurantForm = new FormGroup(
    {
      DishName    :   new FormControl('', [Validators.required, Validators.minLength(10)]),
      DishPrice   :   new FormControl('', [Validators.required, Validators.minLength(5)]),
      Ingredients :   new FormControl('', [Validators.required])
    }
    )

    test(){
      console.log(this.restaurantForm.controls['DishName']);
    }
}
