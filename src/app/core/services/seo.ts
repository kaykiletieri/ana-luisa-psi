import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SEOData {
  title: string;
  description: string;
  url: string;
  image: string;
  type?: 'website' | 'article';
  schema?: object;
}

@Injectable({ providedIn: 'root' })
export class SeoService {
  private meta = inject(Meta);
  private title = inject(Title);
  private doc = inject(DOCUMENT);
  private baseUrl = 'https://www.psianaluisaalmeida.com';
  private defaultImage = `${this.baseUrl}/assets/images/og-image.webp`;

  private defaultSEO: SEOData = {
    title: 'Ana Luísa Almeida | Psicóloga Clínica',
    description: 'Psicóloga Clínica especializada em abordagem fenomenológico-existencial. Atendimento online para todo o Brasil e presencial em Poços de Caldas - MG e Muzambinho - MG.',
    url: this.baseUrl,
    image: this.defaultImage,
    type: 'website'
  };

  updateSEO(data: Partial<SEOData>) {
    const seo = { ...this.defaultSEO, ...data };
    const fullUrl = seo.url.startsWith('http') ? seo.url : `${this.baseUrl}${seo.url}`;
    const fullImage = seo.image.startsWith('http') ? seo.image : `${this.baseUrl}${seo.image}`;

    this.title.setTitle(seo.title);

    this.meta.updateTag({ name: 'description', content: seo.description });
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:url', content: fullUrl });
    this.meta.updateTag({ property: 'og:image', content: fullImage });
    this.meta.updateTag({ property: 'og:type', content: seo.type || 'website' });
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
    this.meta.updateTag({ name: 'twitter:image', content: fullImage });

    this.updateSchema(seo.schema);
  }

  private updateSchema(schema?: object) {
    const existing = this.doc.querySelector('script[type="application/ld+json"][data-seo="dynamic"]');
    if (existing) existing.remove();

    if (schema) {
      const script = this.doc.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo', 'dynamic');
      script.textContent = JSON.stringify(schema);
      this.doc.head.appendChild(script);
    }
  }

  reset() {
    this.updateSEO({});
  }
}