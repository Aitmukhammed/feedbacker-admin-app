import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  constructor() { }

  languageId = 2;
  changeLanguage(language: string) {
    if (language === 'rus') {
      this.languageId = 0;
    }
    if (language === 'eng') {
      this.languageId = 1;
    }
    if (language === 'kz') {
      this.languageId = 2;
    }    
  }
}
