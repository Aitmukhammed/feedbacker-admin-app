import { Component, ViewChild, ElementRef  } from '@angular/core';
import data from '../../assets/i18n/basket.json'
import { TranslateService } from '../services/translate.service';
import { Product } from '../Product';
import { ProductService } from '../services/product.service';


@Component({
  selector: 'app-decoration',
  templateUrl: './decoration.component.html',
  styleUrls: ['./decoration.component.css']
})
export class DecorationComponent {

  constructor(public translateService: TranslateService, private productService: ProductService) { }
  totalCost: number = 0;  
  text = data
  address?: string; 
  cartItems: Product[] = [];
  delivery_total = 0;
  delivery_amout = 0;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;  


  ngOnInit() {
    this.cartItems = this.productService.getCartItemsFromLocalStorage();
    this.productService.loadCartItems();
    this.cartItems = this.productService.getCartItems();
    this.updateTotalCost();
    this.deliveryAmount();
  }

  deliveryAmount() {
    if (this.totalCost < 8000) {
      this.delivery_total =  this.totalCost + 700;
      this.delivery_amout = 700;
    }else {
      this.delivery_amout = 0;
      this.delivery_total = 0
    }
  }  

  private updateTotalCost() {
    this.totalCost = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  selectedPaymentOption: string = '';

  onPaymentOptionChange(option: string) {
    this.selectedPaymentOption = option;
  }
}
