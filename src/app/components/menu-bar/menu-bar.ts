import { Component, OnInit } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NgFor, NgIf } from '@angular/common'

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [TranslateModule, NgFor, NgIf],
  templateUrl: './menu-bar.html',
  styleUrl: './menu-bar.css',
})
export class MenuBar implements OnInit{

  menuItems = [
    'MENU.GAMES',
    'MENU.ACCESSORIES',
    'MENU.NEWS',
    'MENU.SUPPORT'
  ];

  langItems = [
    { code: 'pt', label: 'LANG.Portuguese', flag: '🇧🇷' },
    { code: 'en', label: 'LANG.English', flag: '🇺🇸' }
  ];

  currentLang = 'pt';
  showPopover = false;

 constructor(private translate: TranslateService) {
    this.translate.setFallbackLang('pt');
    this.translate.use(this.currentLang);
  }

  togglePopover() {
    this.showPopover = !this.showPopover;
  }

  toggleLang(lang: string) {
    this.currentLang = lang;
    this.translate.use(lang);
    this.showPopover = false;
  }

  ngOnInit(): void {
    // Component initialization logic here
  }

}
