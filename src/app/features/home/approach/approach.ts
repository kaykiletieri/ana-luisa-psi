import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective],
  templateUrl: './approach.html',
  styleUrl: './approach.scss',
})
export class Approach {
  pillars: string[] = [
    'Investigação da sua experiência vivida',
    'Liberdade de ser quem você é',
    'Responsabilidade pelas suas escolhas',
    'Construção de sentido existencial'
  ];

  scrollToHowItWorks(): void {
    document.getElementById('como-funciona')?.scrollIntoView({ behavior: 'smooth' });
  }
}
