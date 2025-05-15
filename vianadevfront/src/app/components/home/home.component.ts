import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,
    CommonModule, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  email: string = 'vianacommerce@gmail.com';

  showAlert: boolean = false;

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
}