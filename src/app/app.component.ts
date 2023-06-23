import { Component, OnInit, OnDestroy } from '@angular/core';
import { TokenStorageService } from './auth/token-storage.service';
import data from '../../src/assets/i18n/menu/title.json'
import { TranslateService} from './services/translate.service';
import app from '../assets/i18n/app.json'
import { ProductService } from './services/product.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', 
  styleUrls: ['./app.component.css'],
  providers: [ProductService],
})
export class AppComponent implements OnInit {
  roles?: string[];
  authority?: string;
  totalItems?: number;
  private subscription: Subscription;
  text_2 =data

  constructor(private tokenStorage: TokenStorageService, 
    public translateservice: TranslateService, 
    private router: Router, 
    private productService: ProductService) { 
      this.subscription = this.productService.totalQuantity$.subscribe(totalQuantity => {
        this.totalItems = totalQuantity;
    });
  }



  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  text = app;
  language = 'Kz';
  changeLanguageTitle(language: string) {
    if (language === 'rus') {
      this.language = 'Rus';
    }
    if (language === 'eng') {
      this.language = 'Eng';
    }
    if (language === 'kz') {
      this.language = 'Kz';
    }
    this.translateservice.changeLanguage(language)   
  }

  reloadPage(str: string) {
    const basketUrl = str;
    const fullUrl = window.location.origin + this.router.serializeUrl(this.router.createUrlTree([basketUrl]));
    window.location.href = fullUrl;
  }
  
  
  ngOnInit() {
    this.totalItems = Number(localStorage.getItem('totalQuantity')) || 0;
    this.subscription = this.productService.totalQuantity$.subscribe(totalQuantity => {
      this.totalItems = totalQuantity;
    });
    
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
  }
}
