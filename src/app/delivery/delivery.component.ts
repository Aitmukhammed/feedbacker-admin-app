import { Component } from '@angular/core';
import data from '../../assets/i18n/delivery.json'
import { TranslateService } from '../services/translate.service';


@Component({
  selector: 'app-delivery',
  templateUrl: './delivery.component.html',
  styleUrls: ['./delivery.component.css']
})
export class DeliveryComponent {
  constructor(public translateservice: TranslateService) {}
  text = data;

}
