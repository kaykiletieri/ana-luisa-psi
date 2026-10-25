import { Routes } from '@angular/router';
import { HomePage } from './features/pages/home/home-page';
import { SobrePage } from './features/pages/sobre/sobre-page';
import { AtendimentoOnlinePage } from './features/pages/atendimento-online/atendimento-online-page';
import { AtendimentoPresencialPage } from './features/pages/atendimento-presencial/atendimento-presencial-page';
import { AbordagemPage } from './features/pages/abordagem/abordagem-page';
import { ComoFuncionaPage } from './features/pages/como-funciona/como-funciona-page';
import { AgendarPage } from './features/pages/agendar/agendar-page';

export const routes: Routes = [
  { path: '', component: HomePage, data: { seo: 'home' } },
  { path: 'sobre', component: SobrePage, data: { seo: 'sobre' } },
  { path: 'atendimento-online', component: AtendimentoOnlinePage, data: { seo: 'atendimento-online' } },
  { path: 'atendimento-presencial', component: AtendimentoPresencialPage, data: { seo: 'atendimento-presencial' } },
  { path: 'abordagem', component: AbordagemPage, data: { seo: 'abordagem' } },
  { path: 'como-funciona', component: ComoFuncionaPage, data: { seo: 'como-funciona' } },
  { path: 'agendar', component: AgendarPage, data: { seo: 'agendar' } },
  { path: '**', redirectTo: '' }
];