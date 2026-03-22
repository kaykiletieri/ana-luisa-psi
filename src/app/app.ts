import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Hero } from './features/home/hero/hero';
import { About } from './features/home/about/about';
import { HowIHelp } from './features/home/how-i-help/how-i-help';
import { Approach } from './features/home/approach/approach';
import { HowItWorks } from './features/home/how-it-works/how-it-works';
import { OnlineService } from './features/home/online-service/online-service';
import { Footer } from './shared/components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, HowIHelp, Approach, HowItWorks, OnlineService, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ana-luisa-psi');
}
