import { Component } from '@angular/core';
import data from '../../../assets/i18n/menu/Meat_poultry/meat.json'
import data_2 from '../../../assets/i18n/menu/title.json'
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-meat',
  templateUrl: './meat.component.html',
  styleUrls: ['./meat.component.css']
})
export class MeatComponent {
  constructor(private productService : ProductService,
    public translateservice : TranslateService){}
  
  
    text = data;
    title = data_2;
  
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
