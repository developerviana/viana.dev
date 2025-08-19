import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from "../footer/footer.component";
import { RecaptchaModule } from 'ng-recaptcha';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule, FooterComponent, RecaptchaModule, TranslateModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  email: string = 'vianacommerce@gmail.com';

  showAlert: boolean = false;
  showEmailSuccess: boolean = false;

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
    // Envia o token para o backend para validação
    if (response) {
      fetch('https://viana-devbackend.onrender.com/api/verify-recaptcha', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token: response })
      })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
        } else {
          alert('reCAPTCHA inválido. Tente novamente.');
        }
      })
      .catch(() => {
        alert('Erro ao validar reCAPTCHA.');
      });
    }
  }

  onSubmitEmail(form: any) {
    if (!this.captchaResponse) {
      alert('Por favor, resolva o reCAPTCHA antes de enviar.');
      return;
    }
    const payload = {
      name: form.value.nome,
      email: form.value.email,
      message: form.value.mensagem,
      token: this.captchaResponse
    };
    fetch('https://viana-devbackend.onrender.com/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        this.showEmailSuccess = true;
        setTimeout(() => {
          this.showEmailSuccess = false;
        }, 2500);
        form.reset();
        this.captchaResponse = '';
      } else {
        alert('Erro ao enviar mensagem.');
      }
    })
    .catch(() => {
      alert('Erro ao enviar mensagem.');
    });
  }

}