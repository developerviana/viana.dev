import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";
import { RecaptchaModule } from 'ng-recaptcha';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule, FooterComponent, RecaptchaModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  email: string = 'vianacommerce@gmail.com';

  showAlert: boolean = false;

  captchaResponse: string = '';

  // Carrossel de skills
  skills = [
    { src: '/assets/Go.png', alt: 'Go' },
    { src: '/assets/Tailwind.png', alt: 'Tailwind' },
    { src: '/assets/java.png', alt: 'Java' },
    { src: '/assets/angular_gradient.png', alt: 'Angular' },
    { src: '/assets/ADVPL.png', alt: 'ADVPL' }
  ];
  currentSkill = 0;

  prevSkill() {
    this.currentSkill = (this.currentSkill - 1 + this.skills.length) % this.skills.length;
  }

  nextSkill() {
    this.currentSkill = (this.currentSkill + 1) % this.skills.length;
  }

  copyEmailToClipboard() {
    navigator.clipboard.writeText(this.email).then(() => {
      this.showAlert = true;
      setTimeout(() => {
        this.showAlert = false;
      }, 1000); 
    }).catch(err => {
      console.error('Erro ao copiar:', err);
    });
  }

  onCaptchaResolved(response: string | null) {
    this.captchaResponse = response ?? '';
  }

}