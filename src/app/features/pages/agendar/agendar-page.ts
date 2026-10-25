import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { LucideAngularModule, MessageSquare, Mail, Phone, Clock, Calendar, Globe, Shield } from 'lucide-angular';
import { SeoService, SEOData } from '../../../core/services/seo';
import { WhatsappService } from '../../../core/services/whatsapp';

@Component({
  selector: 'app-agendar-page',
  imports: [LucideAngularModule],
  template: `
    <section class="agendar" aria-labelledby="agendar-title">
      <div class="agendar__container">
        <h1 id="agendar-title" class="agendar__title">Agendar Consulta</h1>
        
        <p class="agendar__intro">
          Escolha a melhor forma de entrar em contato para agendar sua sessão.
          Respondo geralmente em até 24 horas úteis.
        </p>

        <div class="agendar__options">
          <a 
            href="{{ whatsappUrl }}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="agendar__btn agendar__btn--whatsapp"
            (click)="trackWhatsAppClick()"
          >
            <lucide-icon [img]="MessageSquare" [size]="24" class="agendar__btn-icon"></lucide-icon>
            <div class="agendar__btn-content">
              <span class="agendar__btn-label">WhatsApp</span>
              <span class="agendar__btn-desc">Resposta mais rápida</span>
            </div>
          </a>

          <a 
            href="mailto:{{ email }}" 
            class="agendar__btn agendar__btn--email"
          >
            <lucide-icon [img]="Mail" [size]="24" class="agendar__btn-icon"></lucide-icon>
            <div class="agendar__btn-content">
              <span class="agendar__btn-label">E-mail</span>
              <span class="agendar__btn-desc">{{ email }}</span>
            </div>
          </a>

          <a 
            href="tel:{{ phone }}" 
            class="agendar__btn agendar__btn--phone"
          >
            <lucide-icon [img]="Phone" [size]="24" class="agendar__btn-icon"></lucide-icon>
            <div class="agendar__btn-content">
              <span class="agendar__btn-label">Telefone</span>
              <span class="agendar__btn-desc">{{ phone }}</span>
            </div>
          </a>
        </div>

        <div class="agendar__info">
          <h2 class="agendar__info-title">Informações para o agendamento</h2>
          <ul class="agendar__info-list">
            <li>
              <lucide-icon [img]="Clock" [size]="18" class="agendar__info-icon"></lucide-icon>
              <span>Sessões de 50 minutos</span>
            </li>
            <li>
              <lucide-icon [img]="Calendar" [size]="18" class="agendar__info-icon"></lucide-icon>
              <span>Frequência semanal ou quinzenal</span>
            </li>
            <li>
              <lucide-icon [img]="Globe" [size]="18" class="agendar__info-icon"></lucide-icon>
              <span>Online (todo Brasil) ou Presencial (Poços de Caldas/Muzambinho - MG)</span>
            </li>
            <li>
              <lucide-icon [img]="Shield" [size]="18" class="agendar__info-icon"></lucide-icon>
              <span>Sigilo profissional garantido (Código de Ética do Psicólogo - CRP 04/84744)</span>
            </li>
          </ul>
        </div>

        <div class="agendar__faq">
          <h2 class="agendar__faq-title">Dúvidas frequentes</h2>
          
          <details class="agendar__faq-item">
            <summary>Como funciona a primeira sessão?</summary>
            <p>A primeira sessão é um momento de acolhimento e conhecimento mútuo. Conversamos sobre o que te trouxe à terapia, sua história e expectativas. Não é necessário preparar nada.</p>
          </details>
          
          <details class="agendar__faq-item">
            <summary>Preciso ter um diagnóstico para fazer terapia?</summary>
            <p>Não. A psicoterapia é um espaço de cuidado e autoconhecimento. Muitas pessoas buscam terapia para lidar com momentos difíceis, entender-se melhor ou desenvolver novas formas de viver.</p>
          </details>
          
          <details class="agendar__faq-item">
            <summary>O atendimento online é tão eficaz quanto o presencial?</summary>
            <p>Sim. Estudos mostram que a psicoterapia online tem eficácia equivalente à presencial. O sigilo e a qualidade do atendimento são mantidos.</p>
          </details>
          
          <details class="agendar__faq-item">
            <summary>Como é feito o pagamento?</summary>
            <p>O pagamento é realizado via PIX ou transferência bancária, preferencialmente antes de cada sessão. Os dados são enviados após o agendamento.</p>
          </details>
          
          <details class="agendar__faq-item">
            <summary>Atende convênios/seguros?</summary>
            <p>Atualmente atendo apenas particular. Posso fornecer recibo para solicitação de reembolso junto ao seu convênio/seguro, se houver cobertura para psicoterapia.</p>
          </details>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .agendar {
      padding: 4rem 1.5rem;
      min-height: calc(100vh - 200px);
    }
    .agendar__container {
      max-width: 800px;
      margin: 0 auto;
    }
    .agendar__title {
      font-size: 2.5rem;
      text-align: center;
      margin-bottom: 1rem;
      color: var(--color-text);
    }
    .agendar__intro {
      text-align: center;
      color: var(--color-text-muted);
      margin-bottom: 3rem;
      font-size: 1.1rem;
    }
    .agendar__options {
      display: grid;
      gap: 1rem;
      margin-bottom: 3rem;
    }
    @media (min-width: 480px) {
      .agendar__options {
        grid-template-columns: repeat(3, 1fr);
      }
    }
    .agendar__btn {
      display: flex;
      align-items: center;
      gap: 1rem;
      padding: 1.5rem;
      border: 2px solid var(--color-border);
      border-radius: 12px;
      background: var(--color-surface);
      text-decoration: none;
      color: var(--color-text);
      transition: all 0.2s ease;
    }
    .agendar__btn:hover {
      border-color: var(--color-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.1);
    }
    .agendar__btn--whatsapp:hover {
      border-color: #25D366;
      background: rgba(37, 211, 102, 0.1);
    }
    .agendar__btn-icon {
      flex-shrink: 0;
      color: var(--color-primary);
    }
    .agendar__btn--whatsapp .agendar__btn-icon {
      color: #25D366;
    }
    .agendar__btn-content {
      display: flex;
      flex-direction: column;
    }
    .agendar__btn-label {
      font-weight: 600;
      font-size: 1.1rem;
    }
    .agendar__btn-desc {
      font-size: 0.85rem;
      color: var(--color-text-muted);
    }
    .agendar__info {
      margin-bottom: 3rem;
      padding: 1.5rem;
      background: var(--color-surface);
      border: 1px solid var(--color-border);
      border-radius: 12px;
    }
    .agendar__info-title {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--color-text);
    }
    .agendar__info-list {
      list-style: none;
      padding: 0;
      display: grid;
      gap: 0.75rem;
    }
    .agendar__info-list li {
      display: flex;
      align-items: flex-start;
      gap: 0.75rem;
      color: var(--color-text-muted);
      line-height: 1.5;
    }
    .agendar__info-icon {
      flex-shrink: 0;
      margin-top: 0.15rem;
      color: var(--color-primary);
    }
    .agendar__faq {
      border-top: 1px solid var(--color-border);
      padding-top: 2rem;
    }
    .agendar__faq-title {
      font-size: 1.5rem;
      margin-bottom: 1.5rem;
      color: var(--color-text);
    }
    .agendar__faq-item {
      border: 1px solid var(--color-border);
      border-radius: 8px;
      margin-bottom: 0.75rem;
      background: var(--color-surface);
    }
    .agendar__faq-item summary {
      padding: 1rem 1.5rem;
      cursor: pointer;
      font-weight: 500;
      color: var(--color-text);
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .agendar__faq-item summary::-webkit-details-marker {
      display: none;
    }
    .agendar__faq-item summary::after {
      content: '+';
      font-size: 1.5rem;
      color: var(--color-primary);
      transition: transform 0.2s;
    }
    .agendar__faq-item[open] summary::after {
      transform: rotate(45deg);
    }
    .agendar__faq-item p {
      padding: 0 1.5rem 1rem;
      color: var(--color-text-muted);
      line-height: 1.6;
      margin: 0;
    }
  `]
})
export class AgendarPage implements OnInit, OnDestroy {
  private seo = inject(SeoService);
  private whatsapp = inject(WhatsappService);

  whatsappUrl = '';
  phone = '';
  email = '';

  readonly MessageSquare = MessageSquare;
  readonly Mail = Mail;
  readonly Phone = Phone;
  readonly Clock = Clock;
  readonly Calendar = Calendar;
  readonly Globe = Globe;
  readonly Shield = Shield;

  // Lucide icons

  ngOnInit() {
    this.whatsappUrl = this.whatsapp.getWhatsAppLink();
    this.phone = this.whatsapp.getPhone();
    this.email = 'contato@psianaluisaalmeida.com';

    const seoData: SEOData = {
      title: 'Agendar Consulta | WhatsApp, E-mail e Telefone - Ana Luísa Almeida',
      description: 'Agende sua sessão de psicoterapia via WhatsApp, e-mail ou telefone. Atendimento online para todo Brasil e presencial em Poços de Caldas e Muzambinho - MG.',
      url: '/agendar',
      image: '/assets/images/og-image.webp',
      schema: this.getAgendarSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  trackWhatsAppClick() {
    // Analytics event tracking pode ser adicionado aqui
  }

  private getAgendarSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'ContactPage',
      name: 'Agendar Consulta - Ana Luísa Almeida',
      description: 'Entre em contato para agendar sua sessão de psicoterapia. WhatsApp, e-mail e telefone disponíveis.',
      mainEntity: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        credential: 'CRP 04/84744',
        telephone: this.phone,
        email: this.email,
        url: 'https://www.psianaluisaalmeida.com/agendar',
        contactPoint: [
          {
            '@type': 'ContactPoint',
            telephone: this.phone,
            contactType: 'customer service',
            availableLanguage: ['pt-BR'],
            areaServed: 'BR'
          },
          {
            '@type': 'ContactPoint',
            contactType: 'customer service',
            url: this.whatsappUrl,
            availableLanguage: ['pt-BR'],
            areaServed: 'BR'
          }
        ]
      }
    };
  }
}