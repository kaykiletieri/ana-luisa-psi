import { Component, HostListener } from '@angular/core';
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
  currentBg = 'assets/images/hero-bg4.webp';

  constructor(private whatsapp: Whatsapp) { }

  ngOnInit(): void {
    this.updateBg();
  }

  @HostListener('window:resize')
  updateBg(): void {
    this.currentBg = window.innerWidth >= 650
      ? 'assets/images/hero-bg1.webp'
      : 'assets/images/hero-bg4.webp';
  }

  openWhatsApp(): void {
    this.whatsapp.open();
  }

  scrollToContact(): void {
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  }
}