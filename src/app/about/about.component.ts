import { Component } from '@angular/core';
import data from '../../assets/i18n/about.json'
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  constructor(public translateservice: TranslateService){}
  text = data;
}
