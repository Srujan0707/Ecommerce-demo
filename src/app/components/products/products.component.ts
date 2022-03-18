import { Component, OnInit } from '@angular/core';
import { CartApiService } from 'src/app/services/cart-api.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  public productData:any;

  constructor(private cartApiService:CartApiService) { }

  ngOnInit(): void {
    this.cartApiService.getproducts().subscribe(data=>{
      this.productData = data;
      console.log("Console data === " + JSON.stringify(this.productData));
    })
  }

}
