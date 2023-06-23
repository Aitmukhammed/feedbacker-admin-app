import { Component } from '@angular/core';
import { ProductService } from '../services/product.service';
import { TranslateService } from '../services/translate.service';
import data from '../../assets/i18n/Healthy_snack.json'
import data_2 from '../../assets/i18n/header.json'
import { Product } from '../Product';

@Component({
  selector: 'app-healthy-snack',
  templateUrl: './healthy-snack.component.html',
  styleUrls: ['./healthy-snack.component.css']
})
export class HealthySnackComponent {
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

