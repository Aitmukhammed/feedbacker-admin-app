import { Component } from '@angular/core';
import data from '../../../assets/i18n/catalogs/beauty/facial_care.json'
import data_2 from '../../../assets/i18n/catalogs/beauty/hair_care.json'
import data_3 from '../../../assets/i18n/catalogs/beauty/makeup.json'
import data_4 from '../../../assets/i18n/catalogs/beauty/toothpastes.json'
import { Product } from '../../Product';
import { ProductService } from '../../services/product.service';
import { TranslateService } from '../../services/translate.service';
import header from '../../../assets/i18n/catalogs/header.json'

@Component({
  selector: 'app-beauty',
  templateUrl: './beauty.component.html',
  styleUrls: ['./beauty.component.css']
})

export class BeautyComponent {
  constructor(private productService : ProductService,
    public translateservice : TranslateService){}
  
    text = data;
    text_2 = data_2;
    text_3 = data_3
    text_4 = data_4
    header = header
  
    addToCart(product: Product) {
      this.productService.addToCart(product);
    }
  
    removeFromCart(product: Product) {
      this.productService.removeFromCart(product);
    }
  
    getProductQuantityById(id: number): number {
      return this.productService.getProductQuantityById(id);
    }
  
    activeBlock: number = 1;
  
    showBlock(blockNumber: number) {
      this.activeBlock = blockNumber;
    }
  
  
    showDes: number | null = null;
  
    toggleBlock(index: number): void {
      this.showDes = this.showDes === index ? null : index;
    }
  
  }
  
  