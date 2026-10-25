import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { OnlineService } from '../../home/online-service/online-service';
import { SeoService, SEOData } from '../../../core/services/seo';

@Component({
  selector: 'app-atendimento-presencial-page',
  imports: [OnlineService],
  template: `
    <app-online-service />
    <section class="presencial-details" aria-labelledby="presencial-title">
      <div class="presencial-details__container">
        <h2 id="presencial-title" class="presencial-details__title">Atendimento Presencial</h2>
        
        <div class="presencial-details__cities">
          <article class="presencial-details__city">
            <h3 class="presencial-details__city-name">Poços de Caldas - MG</h3>
            <p class="presencial-details__city-description">
              Atendimento em consultório particular na cidade de Poços de Caldas, 
              Minas Gerais. Ambiente acolhedor e privativo para suas sessões de psicoterapia.
            </p>
          </article>
          
          <article class="presencial-details__city">
            <h3 class="presencial-details__city-name">Muzambinho - MG</h3>
            <p class="presencial-details__city-description">
              Atendimento presencial também disponível em Muzambinho, Minas Gerais. 
              Consulte disponibilidade de horários e localização exata ao agendar.
            </p>
          </article>
        </div>

        <div class="presencial-details__info">
          <h3>Informações importantes</h3>
          <ul>
            <li>Sessões com duração de 50 minutos</li>
            <li>Frequência semanal ou quinzenal</li>
            <li>Ambiente climatizado e acessível</li>
            <li>Sigilo profissional garantido (Código de Ética do Psicólogo)</li>
          </ul>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .presencial-details {
      padding: 4rem 1.5rem;
      background: var(--color-surface);
    }
    .presencial-details__container {
      max-width: 800px;
      margin: 0 auto;
    }
    .presencial-details__title {
      font-size: 2rem;
      text-align: center;
      margin-bottom: 2rem;
      color: var(--color-text);
    }
    .presencial-details__cities {
      display: grid;
      gap: 1.5rem;
      margin-bottom: 3rem;
    }
    @media (min-width: 768px) {
      .presencial-details__cities {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .presencial-details__city {
      padding: 1.5rem;
      border: 1px solid var(--color-border);
      border-radius: 8px;
      background: var(--color-background);
    }
    .presencial-details__city-name {
      font-size: 1.25rem;
      margin-bottom: 0.5rem;
      color: var(--color-primary);
    }
    .presencial-details__city-description {
      color: var(--color-text-muted);
      line-height: 1.6;
    }
    .presencial-details__info h3 {
      margin-bottom: 1rem;
      color: var(--color-text);
    }
    .presencial-details__info ul {
      list-style: none;
      padding: 0;
      display: grid;
      gap: 0.5rem;
    }
    @media (min-width: 480px) {
      .presencial-details__info ul {
        grid-template-columns: repeat(2, 1fr);
      }
    }
    .presencial-details__info li {
      padding-left: 1.5rem;
      position: relative;
      color: var(--color-text-muted);
    }
    .presencial-details__info li::before {
      content: '✓';
      position: absolute;
      left: 0;
      color: var(--color-primary);
      font-weight: bold;
    }
  `]
})
export class AtendimentoPresencialPage implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  ngOnInit() {
    const seoData: SEOData = {
      title: 'Atendimento Psicológico Presencial | Poços de Caldas e Muzambinho - MG',
      description: 'Psicoterapia presencial em Poços de Caldas - MG e Muzambinho - MG. Consultório particular, ambiente acolhedor. Abordagem fenomenológico-existencial.',
      url: '/atendimento-presencial',
      image: '/assets/images/og-image.webp',
      schema: this.getPresencialSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  private getPresencialSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Psicoterapia Presencial',
      description: 'Atendimento psicológico presencial em consultório particular nas cidades de Poços de Caldas - MG e Muzambinho - MG.',
      provider: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        credential: 'CRP 04/84744'
      },
      areaServed: [
        {
          '@type': 'City',
          name: 'Poços de Caldas - MG'
        },
        {
          '@type': 'City',
          name: 'Muzambinho - MG'
        }
      ],
      availableChannel: {
        '@type': 'ServiceChannel',
        serviceUrl: 'https://www.psianaluisaalmeida.com/agendar',
        availableLanguage: ['pt-BR']
      },
      serviceType: 'Psicoterapia Clínica - Abordagem Fenomenológico-Existencial'
    };
  }
}