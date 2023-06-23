import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService} from '../services/translate.service';
import data from '../../../src/assets/i18n/app.json'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  constructor(public translateservice: TranslateService, private router: Router, ){}
  text = data;

  reloadPage(str: string) {
    const basketUrl = str;
    const fullUrl = window.location.origin + this.router.serializeUrl(this.router.createUrlTree([basketUrl]));
    window.location.href = fullUrl;
  }
}
