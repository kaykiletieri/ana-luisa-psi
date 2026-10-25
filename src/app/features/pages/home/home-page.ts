import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../../home/hero/hero';
import { About } from '../../home/about/about';
import { HowIHelp } from '../../home/how-i-help/how-i-help';
import { Approach } from '../../home/approach/approach';
import { HowItWorks } from '../../home/how-it-works/how-it-works';
import { OnlineService } from '../../home/online-service/online-service';
import { SeoService, SEOData } from '../../../core/services/seo';

@Component({
  selector: 'app-home-page',
  imports: [Hero, About, HowIHelp, Approach, HowItWorks, OnlineService],
  template: `
    <app-hero />
    <app-about />
    <app-how-i-help />
    <app-approach />
    <app-how-it-works />
    <app-online-service />
  `
})
export class HomePage implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  ngOnInit() {
    const seoData: SEOData = {
      title: 'Ana Luísa Almeida | Psicóloga Clínica',
      description: 'Psicóloga Clínica especializada em abordagem fenomenológico-existencial. Atendimento online para todo o Brasil e presencial em Poços de Caldas - MG e Muzambinho - MG.',
      url: '/',
      image: '/assets/images/og-image.webp',
      schema: this.getHomeSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  private getHomeSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      name: 'Ana Luísa Almeida | Psicóloga Clínica',
      url: 'https://www.psianaluisaalmeida.com',
      description: 'Psicóloga Clínica especializada em abordagem fenomenológico-existencial com atendimento online para todo o Brasil e presencial em Poços de Caldas - MG e Muzambinho - MG.',
      areaServed: [
        { '@type': 'City', name: 'Poços de Caldas - MG' },
        { '@type': 'City', name: 'Muzambinho - MG' },
        { '@type': 'Country', name: 'Brasil' }
      ],
      availableLanguage: ['pt-BR'],
      serviceType: 'Psicoterapia Clínica',
      provider: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        credential: 'CRP 04/84744',
        alumniOf: { '@type': 'CollegeOrUniversity', name: 'PUC Minas campus Poços de Caldas' }
      }
    };
  }
}

import { inject } from '@angular/core';