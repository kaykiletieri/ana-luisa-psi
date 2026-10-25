import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LucideAngularModule, Video } from 'lucide-angular';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { RouterLink } from '@angular/router';
import { WhatsappService } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-online-service',
  standalone: true,
  imports: [ScrollAnimateDirective, LucideAngularModule, RouterLink],
  templateUrl: './online-service.html',
  styleUrl: './online-service.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnlineService {
  readonly Video = Video;

  constructor(private whatsapp: WhatsappService) { }

  openWhatsApp(): void {
    this.whatsapp.open();
  }
}
