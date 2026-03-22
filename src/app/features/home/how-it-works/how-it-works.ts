import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { LucideAngularModule, Calendar, MessageCircle, Sprout } from 'lucide-angular';

interface Step {
  number: string;
  icon: any;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-it-works',
  imports: [CommonModule, ScrollAnimateDirective, LucideAngularModule],
  templateUrl: './how-it-works.html',
  styleUrl: './how-it-works.scss',
})
export class HowItWorks {
  steps: Step[] = [
    {
      number: '01',
      icon: Calendar,
      title: 'Agendamento',
      description: 'Entre em contato por WhatsApp ou formulário e escolha o melhor horário para você.'
    },
    {
      number: '02',
      icon: MessageCircle,
      title: 'Primeira sessão',
      description: 'Um momento de conhecimento mútuo onde conversaremos sobre suas necessidades e expectativas.'
    },
    {
      number: '03',
      icon: Sprout,
      title: 'Processo terapêutico contínuo',
      description: 'Sessões semanais onde construiremos juntos um caminho de autoconhecimento e transformação.'
    }
  ];
}
