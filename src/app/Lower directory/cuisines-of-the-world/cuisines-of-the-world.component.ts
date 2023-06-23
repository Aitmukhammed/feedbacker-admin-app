import { Component } from '@angular/core';
import data from '../../../assets/i18n/catalogs/Cuisines_of_the_peoples_of_the_world/Cuisines_of_the_peoples_of_the_world.json'
import header from '../../../assets/i18n/catalogs/header.json'
import { Product } from '../../Product';
import { ProductService } from '../../services/product.service';
import { TranslateService } from '../../services/translate.service';

@Component({
  selector: 'app-cuisines-of-the-world',
  templateUrl: './cuisines-of-the-world.component.html',
  styleUrls: ['./cuisines-of-the-world.component.css']
})
export class CuisinesOfTheWorldComponent {
  constructor(private productService : ProductService,
    public translateservice : TranslateService){}


  text = data;
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
