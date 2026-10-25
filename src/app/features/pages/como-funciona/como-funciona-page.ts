import { Component, OnInit, OnDestroy, inject } from '@angular/core';
import { HowItWorks } from '../../home/how-it-works/how-it-works';
import { SeoService, SEOData } from '../../../core/services/seo';

@Component({
  selector: 'app-como-funciona-page',
  imports: [HowItWorks],
  template: `<app-how-it-works />`
})
export class ComoFuncionaPage implements OnInit, OnDestroy {
  private seo = inject(SeoService);

  ngOnInit() {
    const seoData: SEOData = {
      title: 'Como Funciona a Psicoterapia | Processo Terapêutico - Ana Luísa Almeida',
      description: 'Entenda o passo a passo do atendimento psicológico: primeira sessão, frequência, duração e como agendar. Online para todo Brasil e presencial em MG.',
      url: '/como-funciona',
      image: '/assets/images/og-image.webp',
      schema: this.getComoFuncionaSchema()
    };
    this.seo.updateSEO(seoData);
  }

  ngOnDestroy() {
    this.seo.reset();
  }

  private getComoFuncionaSchema() {
    return {
      '@context': 'https://schema.org',
      '@type': 'HowTo',
      name: 'Como Funciona a Psicoterapia com Ana Luísa Almeida',
      description: 'Processo passo a passo para iniciar o acompanhamento psicológico, desde o primeiro contato até as sessões regulares.',
      provider: {
        '@type': 'Person',
        name: 'Ana Luísa Almeida',
        credential: 'CRP 04/84744'
      },
      step: [
        {
          '@type': 'HowToStep',
          position: 1,
          name: 'Primeiro Contato',
          text: 'Entre em contato via WhatsApp para tirar dúvidas e verificar disponibilidade de horários.'
        },
        {
          '@type': 'HowToStep',
          position: 2,
          name: 'Agendamento da Primeira Sessão',
          text: 'Definimos data, horário e modalidade (online ou presencial). Recebe orientações para a sessão.'
        },
        {
          '@type': 'HowToStep',
          position: 3,
          name: 'Primeira Sessão (Anamnese)',
          text: 'Conversa inicial para conhecer sua história, queixas e expectativas. Início do vínculo terapêutico.'
        },
        {
          '@type': 'HowToStep',
          position: 4,
          name: 'Definição do Plano Terapêutico',
          text: 'Em conjunto, definimos frequência (semanal/quinzenal), objetivos e duração estimada do processo.'
        },
        {
          '@type': 'HowToStep',
          position: 5,
          name: 'Sessões Regulares',
          text: 'Encontros de 50 minutos para trabalhar as questões trazidas, ampliar consciência e promover mudanças.'
        },
        {
          '@type': 'HowToStep',
          position: 6,
          name: 'Avaliação e Encerramento',
          text: 'Revisão periódica do processo. Encerramento planejado quando objetivos são atingidos.'
        }
      ]
    };
  }
}