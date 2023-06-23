import { Component } from '@angular/core';
import data from '../../../assets/i18n/catalogs/holiday/decorations for the holiday.json'
import data_2 from '../../../assets/i18n/catalogs/holiday/gifts for holidays.json'
import { Product } from '../../Product';
import { ProductService } from '../../services/product.service';
import { TranslateService } from '../../services/translate.service';
import header from '../../../assets/i18n/catalogs/header.json'

@Component({
  selector: 'app-holiday',
  templateUrl: './holiday.component.html',
  styleUrls: ['./holiday.component.css']
})
export class HolidayComponent {

  constructor(private productService : ProductService,
    public translateservice : TranslateService){}
  
  
    text = data;
    text_2 = data_2
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
  
  
