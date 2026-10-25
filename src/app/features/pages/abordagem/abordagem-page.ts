import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { Approach } from '../../home/approach/approach';
import { SeoService, SEOData } from '../../../core/services/seo';

@Component({
  selector: 'app-abordagem-page',
  imports: [Approach],
  template: `<app-approach />`
})
export class AbordagemPage implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  ngOnInit() {
    const seoData: SEOData = {
      title: 'Abordagem Fenomenológico-Existencial | Ana Luísa Almeida',
      description: 'Entenda a abordagem fenomenológico-existencial na psicoterapia. Foco na experiência vivida, singularidade e liberdade de escolha. Psicóloga em Poços de Caldas e online.',
      url: '/abordagem',
      image: '/assets/images/og-image.webp',
      schema: this.getAbordagemSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  private getAbordagemSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'MedicalTherapy',
      name: 'Psicoterapia Fenomenológico-Existencial',
      description: 'Abordagem que parte da compreensão da experiência tal como ela se manifesta, respeitando a singularidade de cada trajetória. Foco na ampliação da consciência, autonomia e formas autênticas de existir.',
      alternateName: 'Terapia Existencial Fenomenológica',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Conselho Federal de Psicologia (CFP)'
      },
      provider: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        credential: 'CRP 04/84744'
      }
    };
  }
}