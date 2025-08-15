import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MenuComponent } from "../menu/menu.component";
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    MenuComponent,
    CommonModule,
    TranslateModule
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Input() lang!: string;
  @Input() toggleLang!: () => void;
}
