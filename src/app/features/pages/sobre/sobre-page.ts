import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { About } from '../../home/about/about';
import { SeoService, SEOData } from '../../../core/services/seo';

@Component({
  selector: 'app-sobre-page',
  imports: [About],
  template: `<app-about />`
})
export class SobrePage implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  ngOnInit() {
    const seoData: SEOData = {
      title: 'Sobre Ana Luísa Almeida | Psicóloga Clínica CRP 04/84744',
      description: 'Conheça Ana Luísa Almeida, Psicóloga Clínica formada pela PUC Minas. Especialista em abordagem fenomenológico-existencial. Atendimento humanizado e acolhedor.',
      url: '/sobre',
      image: '/assets/images/og-image.webp',
      schema: this.getSobreSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  private getSobreSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ProfilePage',
      mainEntity: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        alternateName: 'Ana Luísa Almeida - Psicóloga',
        description: 'Psicóloga Clínica formada pela PUC Minas campus Poços de Caldas. Atua com abordagem fenomenológico-existencial.',
        credential: 'CRP 04/84744',
        alumniOf: {
          '@type': 'CollegeOrUniversity',
          name: 'PUC Minas campus Poços de Caldas'
        },
        knowsAbout: [
          'Psicologia Clínica',
          'Abordagem Fenomenológico-Existencial',
          'Psicoterapia',
          'Saúde Mental'
        ],
        url: 'https://www.psianaluisaalmeida.com/sobre',
        sameAs: [
          'https://instagram.com/psianaluisaalmeida',
          'https://linkedin.com/in/ana-luisa-almeida-psicologa'
        ]
      }
    };
  }
}