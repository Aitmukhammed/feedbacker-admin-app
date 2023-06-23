import { Component } from '@angular/core';
import data from '../../assets/i18n/contact.json'
import { ProductService } from '../services/product.service';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
  export class ContactsComponent {
    constructor(private productService: ProductService,
      public translateService: TranslateService) { }
    text = data
}
