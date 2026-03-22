import { Component } from '@angular/core';
import { LucideAngularModule, Video } from 'lucide-angular';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { Whatsapp } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-online-service',
  standalone: true,
  imports: [ScrollAnimateDirective, LucideAngularModule],
  templateUrl: './online-service.html',
  styleUrl: './online-service.scss',
})
export class OnlineService {
  readonly Video = Video;

  constructor(private whatsapp: Whatsapp) { }

  openWhatsApp(): void {
    this.whatsapp.open();
  }
}
