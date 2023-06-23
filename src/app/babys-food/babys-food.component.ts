import { Component } from '@angular/core';
import data from '../../assets/i18n/Yummy_food_for_children.json'
import data_2 from '../../assets/i18n/header.json'
import { TranslateService } from '../services/translate.service';
import { ProductService } from '../services/product.service';
import { Product } from '../Product';

@Component({
  selector: 'app-babys-food',
  templateUrl: './babys-food.component.html',
  styleUrls: ['./babys-food.component.css']
})
export class BabysFoodComponent {
  constructor(private productService : ProductService,
    public translateservice : TranslateService,
    public translateservice_2: TranslateService){}

  text = data;
  text_2 = data_2

  currentIndex = 0;
  prev() {
    if (this.currentIndex !== 0) {
      this.currentIndex-=3;
    }
  }
  next() {
    if (this.currentIndex <= this.text.length ) {
      this.currentIndex += 3;
    }
  }

  addToCart(product: Product) {
    this.productService.addToCart(product);
  }
  
  removeFromCart(product: Product) {
    this.productService.removeFromCart(product);
  }
  
  getProductQuantityById(id: number): number {
    return this.productService.getProductQuantityById(id);
  }
  showDes: number | null = null;

  toggleBlock(index: number): void {
    this.showDes = this.showDes === index ? null : index;
  }
}
