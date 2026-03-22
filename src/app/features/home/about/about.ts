import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';

@Component({
  selector: 'app-about',
  imports: [ScrollAnimateDirective],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About { }
