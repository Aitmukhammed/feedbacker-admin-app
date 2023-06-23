import { Component } from '@angular/core';
import data from '../../../assets/i18n/catalogs.json';
import { TranslateService } from '../../services/translate.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css']
})
export class CatalogsComponent {
  constructor(public translateservice : TranslateService,
    private router: Router, ){}

  text = data

  reloadPage(str: string) {
    const basketUrl = str;
    const fullUrl = window.location.origin + this.router.serializeUrl(this.router.createUrlTree([basketUrl]));
    window.location.href = fullUrl;
  }
}
