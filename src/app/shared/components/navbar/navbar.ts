import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Whatsapp } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  isScrolled = signal(false);

  constructor(private whatsapp: Whatsapp) { }

  @HostListener('window:scroll')
  onScroll(): void {
    this.isScrolled.set(window.scrollY > 50);
  }

  openWhatsApp(): void {
    this.whatsapp.open();
  }
}
