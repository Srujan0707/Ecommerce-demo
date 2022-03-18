import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  mobileShoppingCart: Array<any>;
  startIndex = 0;
  endIndex = 5;
  
  constructor(private cartService:CartService) {this.mobileShoppingCart = [];}

  ngOnInit() {

    this.cartService.getCart().subscribe(cartservice =>{
    this.mobileShoppingCart = cartservice.map(x => 
      {
      return{
        id : x.payload.doc.id, 
        ...(x.payload.doc.data() as {}),
      }
      });
      console.log(this.mobileShoppingCart);
    });
        
  }
  deleteCart(index:any){
this.cartService.deleteProductFromCart(this.mobileShoppingCart[index].id);
  }

  updateCart(index:any){
    this.cartService.updateProductFromCart(
      this.mobileShoppingCart[index].id, 
      this.mobileShoppingCart[index].items );
      }

      callArray(length: number){
        return new Array(length % 5);
      }
      updateIndex(pageIndex:any){
this.startIndex = pageIndex * 5,
this.endIndex = this.startIndex + 5;
      }

  get totalPrice(){
        return this.mobileShoppingCart.reduce((previousValue,currentValue)=>{
        return previousValue+currentValue.price
        }, 0)
      }
}
