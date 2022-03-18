import { Injectable } from '@angular/core';
import { LaptopProductsService } from '../laptop-products.service';
import { MobileProductsService } from '../mobile-products.service';
import { TvProductsService } from '../tv-products.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  addMobiles:number = -1;
  addLaptops:number = -1;
  addTvs:number = -1;
  Mobiles : Array<any>=[];
  Laptops : Array<any>=[];
  TVs:Array<any>=[]
  constructor(
    private mobileProducts:MobileProductsService,
    private laptopProducts:LaptopProductsService,
    private tvProducts : TvProductsService
   ) { 
    this.mobileProducts.getMobileProducts().subscribe((data) => (this.Mobiles = data));
    this.laptopProducts.getLaptopProducts().subscribe((data) => (this.Laptops = data));
    this.tvProducts.getTVProducts().subscribe((data) => (this.TVs = data));
  }

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

   
}
