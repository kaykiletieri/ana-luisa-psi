import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = signal(false);

  private whatsappNumber = '5535991949357';
  private whatsappMessage = 'Olá! Gostaria de agendar uma consulta.';

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  openWhatsApp(): void {
    const message = encodeURIComponent(this.whatsappMessage);
    window.open(`https://wa.me/${this.whatsappNumber}?text=${message}`, '_blank');
  }
}
