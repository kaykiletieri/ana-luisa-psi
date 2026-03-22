import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [ScrollAnimateDirective],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero {
  private whatsappNumber = '5500000000000';
  private whatsappMessage = 'Olá! Gostaria de agendar uma consulta.';

  openWhatsApp(): void {
    const message = encodeURIComponent(this.whatsappMessage);
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }

  scrollToContact(): void {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  }
}