import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { TranslateService} from '../services/translate.service';
import data from '../../assets/i18n/hits.json'
import data_2 from '../../assets/i18n/header.json'
import { Product } from '../Product';

@Component({
  selector: 'app-hits',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent{
  constructor(
     private productService : ProductService,
     public translateservice : TranslateService){}
  
    images = [
      {
        imageSrc:
          'https://arbuz.kz/image/s3/arbuz-kz-banners/191263de-288e-4cd4-88ef-fbb8c656a2ab-ferrero_rocher_father_s_day_final2_3_jpg.jpg?w=1450&h=:h&c=1686651368',
        imageAlt: 'nature1',
      },
      {
        imageSrc:
          'https://arbuz.kz/image/s3/arbuz-kz-banners/b583b27a-8d1a-49e6-a7b1-4bb1b8375e43-arbuz_zs_1_1_png.png?w=1450&h=:h&c=1686634317',
        imageAlt: 'nature2',
      },
      {
        imageSrc:
          'https://arbuz.kz/image/s3/arbuz-kz-banners/79272ead-bb8f-4c35-8b8c-19bfd2a82dda-luchshie-ceny-slaider_png.png?w=1450&h=:h&c=1686888585',
        imageAlt: 'person1',
      }
    ]

  text = data; // ссылается на json
  head = data_2;


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
