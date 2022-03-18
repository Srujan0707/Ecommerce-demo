import { Component, OnInit } from '@angular/core';
import { MobileProductsService } from 'src/app/mobile-products.service';
import { LaptopProductsService } from 'src/app/laptop-products.service';
import { TvProductsService } from 'src/app/tv-products.service';
import { CartService } from 'src/app/services/cart.service';
import { AuthenticationService } from 'src/app/services/authentication.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  addMobiles:number = -1;
  addLaptops:number = -1;
  addTvs:number = -1;
  Mobiles : Array<any>=[];
  Laptops : Array<any>=[];
  TVs:Array<any>=[]
  constructor(
    private mobileProducts:MobileProductsService, 
    private laptopProducts:LaptopProductsService,
    private tvProducts:TvProductsService,
    private cartService:CartService,
    private authenticationService:AuthenticationService,
    ) { }

  ngOnInit(): void {
this.mobileProducts.getMobileProducts().subscribe((data) => (this.Mobiles = data));
this.laptopProducts.getLaptopProducts().subscribe((data) => (this.Laptops = data));
this.tvProducts.getTVProducts().subscribe((data) => (this.TVs = data));}

addToCartOfMobile(index:any){
// console.log('Added'+ this.Mobiles[index]); 
this.addMobiles =+index;
}
addToCartOfLaptops(index:any){
this.addLaptops = +index;
}
addToCartOfTvs(index:any){
  this.addTvs = +index;
  }
buyMobiles(items: any){
let mobileSelectedProduct = this.Mobiles[this.addMobiles];
let mobileProductData = {
  name : mobileSelectedProduct.Name,
  price :mobileSelectedProduct.Price,
  items : items
}

this.cartService
.addToCart(mobileProductData)
.then(()=> (this.addMobiles = -1))
.catch((err)=>console.log());
//console.log(mobileProductData);
};  

// buyLaptops(items: any){
//   let laptopSelectedProduct = this.Mobiles[this.addLaptops]
//   let laptopProductData = {
//     name : laptopSelectedProduct.Name,
//     price :laptopSelectedProduct.Price,
//     items : items
// }
// this.cartService
// .addToCart(laptopProductData)
// .then(()=> (this.addMobiles = -1))
// .catch((err)=>console.log());
// //console.log(laptopProductData);
// };

// buyTvs(items: any){
//   let tvSelectedProduct = this.TVs[this.addTvs]
//   let tvSelectedProduct = {
//     name : tvSelectedProduct.Name,
//     price :tvSelectedProduct.Price,
//     items : items
// }
// this.cartService
// .addToCart(tvSelectedProduct)
// .then(()=> (this.addTvs = -1))
// .catch((err)=>console.log());
// //console.log(tvSelectedProduct);
// };

}
