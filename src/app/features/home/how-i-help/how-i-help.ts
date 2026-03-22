import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { LucideAngularModule, Heart, Sprout, MessageCircle, Brain, Users } from 'lucide-angular';

interface HelpItem {
  icon: any;
  title: string;
  description: string;
}

@Component({
  selector: 'app-how-i-help',
  imports: [CommonModule, NgClass, ScrollAnimateDirective, LucideAngularModule],
  templateUrl: './how-i-help.html',
  styleUrl: './how-i-help.scss',
})
export class HowIHelp {
  readonly Heart = Heart;
  readonly Sprout = Sprout;
  readonly MessageCircle = MessageCircle;
  readonly Brain = Brain;
  readonly Users = Users;

  items: HelpItem[] = [
    { icon: Heart, title: 'Acolhimento da sua experiência', description: 'Um espaço onde você pode ser verdadeiramente ouvido, sem julgamentos, explorando suas vivências e emoções de forma genuína e respeitosa.' },
    { icon: Sprout, title: 'Descoberta de novos significados', description: 'Juntos, investigamos as questões que te movem, buscando compreender o sentido das suas experiências e construir caminhos mais autênticos.' },
    { icon: MessageCircle, title: 'Diálogo profundo e reflexivo', description: 'Através de conversas que vão além da superfície, exploramos sua história, suas escolhas e possibilidades de ser no mundo.' },
    { icon: Brain, title: 'Compreensão da sua totalidade', description: 'Você não é apenas seus sintomas. Aqui, olhamos para a pessoa inteira, suas relações, contextos e a forma única como você habita o mundo.' },
    { icon: Users, title: 'Presença genuína e encontro', description: 'Uma relação terapêutica baseada na presença verdadeira, onde nos encontramos de forma horizontal para caminhar juntos.' },
    { icon: Sprout, title: 'Liberdade e responsabilidade', description: 'Explorar suas possibilidades de escolha, reconhecendo sua liberdade e responsabilidade na construção da sua própria existência.' }
  ];
}
