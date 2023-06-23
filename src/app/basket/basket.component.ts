import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Product } from '../Product';
import data from '../../assets/i18n/basket.json'
import { TranslateService } from '../services/translate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css'],
  providers: [ProductService]
  
})
export class BasketComponent {
  cartItems: Product[] = [];
  totalCost: number = 0;
  showModal = false;
  text = data;

  constructor(private productService: ProductService, private router: Router,
    public translateService: TranslateService) { }

  ngOnInit() {
    this.cartItems = this.productService.getCartItemsFromLocalStorage();
    this.productService.loadCartItems();
    this.cartItems = this.productService.getCartItems();
    this.updateTotalCost();
  }

  isBlockVisible: boolean = false;

  showBlock() {
    this.isBlockVisible = true;
  }
  
  hideBlock() {
    this.isBlockVisible = false;
  }

  reloadPage(str: string) {
    const basketUrl = str;
    const fullUrl = window.location.origin + this.router.serializeUrl(this.router.createUrlTree([basketUrl]));
    window.location.href = fullUrl;
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
    this.updateCartItems();
  }

  removeFromCart(product: Product) {
    this.productService.removeFromCart(product);
    this.updateCartItems();
  }
  
  getNonZeroQuantityItems(): Product[] {
    return this.cartItems.filter(item => this.getProductQuantity(item) > 0);
  }

  removeAllFromCart(product: Product) {
    this.productService.removeAllFromCart(product);
    this.updateCartItems();
  }

  private updateCartItems() {
    this.cartItems = this.productService.getCartItems();
    this.updateTotalCost();
  }
  
  private updateTotalCost() {
    this.totalCost = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  getProductQuantity(product: Product): number {
    const cartItem = this.cartItems.find(item => item.id === product.id);
    return cartItem ? cartItem.quantity : 0;
  }

  getCartItems(): Product[] {
    const cartItemsString = localStorage.getItem('cartItems');
    if (cartItemsString) {
      return JSON.parse(cartItemsString);
    }
    return [];
  }

  removeAllItems() {
    this.productService.removeAllItems();
    this.updateCartItems();
    this.closeModal();
  }

  openModal() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
  

  
  
  
}
