import { Component } from '@angular/core';
import data from '../../../assets/i18n/catalogs/everything_for_home/dishwashing_detergents.json'
import data_2 from '../../../assets/i18n/catalogs/everything_for_home/Laundry_and_laundry_care.json'
import data_3 from '../../../assets/i18n/catalogs/everything_for_home/for_cleaning.json'
import { Product } from '../../Product';
import { ProductService } from '../../services/product.service';
import { TranslateService } from '../../services/translate.service';
import header from '../../../assets/i18n/catalogs/header.json'

@Component({
  selector: 'app-everything-for-home',
  templateUrl: './everything-for-home.component.html',
  styleUrls: ['./everything-for-home.component.css']
})
export class EverythingForHomeComponent {  
  constructor(private productService : ProductService,
    public translateservice : TranslateService){}


  text = data;
  text_2 = data_2;
  text_3 = data_3
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
