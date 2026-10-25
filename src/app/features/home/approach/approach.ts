import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule, ScrollAnimateDirective, RouterLink],
  templateUrl: './approach.html',
  styleUrl: './approach.scss',
})
export class Approach {
  pillars: string[] = [
    'Compreensão da experiência tal como ela se apresenta',
    'Acolhimento da singularidade do seu modo de existir',
    'Implicação nas próprias escolhas e modos de viver',
    'Construção de sentido a partir da sua vivência'
  ];
}
