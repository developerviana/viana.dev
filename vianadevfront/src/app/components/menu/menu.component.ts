import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isDrawerOpen = false;
  lang: string = 'pt';

  toggleLang() {
    this.lang = this.lang === 'pt' ? 'en' : 'pt';
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
