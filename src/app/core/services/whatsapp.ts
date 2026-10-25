import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WhatsappService {
  private readonly number = '5535991949357';
  private readonly defaultMessage = 'Olá! Gostaria de agendar uma consulta.';

  open(message: string = this.defaultMessage): void {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${this.number}?text=${encoded}`, '_blank');
  }

  getWhatsAppLink(message: string = this.defaultMessage): string {
    const encoded = encodeURIComponent(message);
    return `https://wa.me/${this.number}?text=${encoded}`;
  }

  getPhone(): string {
    return '+55 35 99194-9357';
  }
}
