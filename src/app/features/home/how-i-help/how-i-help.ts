import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';
import { LucideAngularModule, Heart, Sprout, Users, Search, GitBranch } from 'lucide-angular';

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
  readonly Users = Users;
  readonly Search = Search;
  readonly GitBranch = GitBranch;

  items: HelpItem[] = [
    {
      icon: Search,
      title: 'Explorar suas experiências',
      description: 'Explorar e compreender suas experiências de forma mais profunda.'
    },
    {
      icon: Heart,
      title: 'Dar sentido ao que você sente',
      description: 'Dar sentido a sentimentos que, muitas vezes, aparecem de forma confusa ou intensa.'
    },
    {
      icon: GitBranch,
      title: 'Refletir sobre seus caminhos',
      description: 'Refletir sobre escolhas e os caminhos possíveis, construindo sentido de forma conjunta e respeitosa.'
    },
    {
      icon: Users,
      title: 'Reconhecer seus padrões',
      description: 'Reconhecer padrões de relação e formas de se posicionar no mundo, considerando sua história e seu contexto.'
    },
    {
      icon: Sprout,
      title: 'Ampliar sua consciência',
      description: 'Ampliar sua consciência sobre si mesmo e sua forma de existir, favorecendo um modo de estar no mundo mais coerente com o que faz sentido para você.'
    }
  ];
}
