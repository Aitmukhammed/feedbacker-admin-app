import { Component } from '@angular/core';
import data from '../../../assets/i18n/menu/Frozen_foods/Dumplings.json'
import data_2 from '../../../assets/i18n/menu/title.json'
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { TranslateService } from 'src/app/services/translate.service';

@Component({
  selector: 'app-dumplings',
  templateUrl: './dumplings.component.html',
  styleUrls: ['./dumplings.component.css']
})
export class DumplingsComponent {
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
