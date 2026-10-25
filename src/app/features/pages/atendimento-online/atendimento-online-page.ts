import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { OnlineService } from '../../home/online-service/online-service';
import { SeoService, SEOData } from '../../../core/services/seo';

@Component({
  selector: 'app-atendimento-online-page',
  imports: [OnlineService],
  template: `<app-online-service />`
})
export class AtendimentoOnlinePage implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  ngOnInit() {
    const seoData: SEOData = {
      title: 'Atendimento Psicológico Online | Todo o Brasil - Ana Luísa Almeida',
      description: 'Sessões de psicoterapia online seguras e sigilosas para todo o Brasil. Abordagem fenomenológico-existencial. Agende sua consulta via WhatsApp.',
      url: '/atendimento-online',
      image: '/assets/images/og-image.webp',
      schema: this.getOnlineSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  private getOnlineSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Psicoterapia Online',
      description: 'Atendimento psicológico online via videochamada para todo o Brasil. Sessões seguras, sigilosas e com a mesma qualidade do atendimento presencial.',
      provider: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        credential: 'CRP 04/84744'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil'
      },
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.psianaluisaalmeida.com/agendar',
        availableLanguage: ['pt-BR']
      },
      serviceType: 'Psicoterapia Clínica - Abordagem Fenomenológico-Existencial'
    };
  }
}