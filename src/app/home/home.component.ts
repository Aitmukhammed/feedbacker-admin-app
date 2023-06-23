import { Component, OnInit } from '@angular/core';
import data from '../../../src/assets/i18n/menu/title.json'
import { TranslateService } from '../services/translate.service';
import { TokenStorageService } from '../auth/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  info: any;
  text = data;


  constructor(private token: TokenStorageService, public translateService: TranslateService) { }

  ngOnInit(): void {
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      // email: this.token.getEmail(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
  }

}
