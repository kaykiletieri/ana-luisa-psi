import { Component, signal } from '@angular/core';
import { Navbar } from './shared/components/navbar/navbar';
import { Hero } from './features/home/hero/hero';
import { About } from './features/home/about/about';
import { HowIHelp } from './features/home/how-i-help/how-i-help';
import { Approach } from './features/home/approach/approach';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, About, HowIHelp, Approach],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('ana-luisa-psi');
}
