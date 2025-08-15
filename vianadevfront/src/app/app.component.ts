import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './components/header/header.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TranslateModule, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Viana Devs';
  lang: string = 'pt';

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang(this.lang);
  }

  toggleLang() {
    this.lang = this.lang === 'pt' ? 'en' : 'pt';
    this.translate.use(this.lang);
  }
}

