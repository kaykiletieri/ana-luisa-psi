import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { Whatsapp } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  constructor(private whatsapp: Whatsapp) { }

  openWhatsApp(): void {
    this.whatsapp.open();
  }

  scrollToContact(): void {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  }
}