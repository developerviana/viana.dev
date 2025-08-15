import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isDrawerOpen = false;
  lang: string = 'pt';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.lang);
  }

  toggleLang() {
    this.lang = this.lang === 'pt' ? 'en' : 'pt';
    this.translate.use(this.lang);
  }

  scrollToSection(event: Event, id: string) {
    event.preventDefault(); 
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    this.isDrawerOpen = false;
  }
}
