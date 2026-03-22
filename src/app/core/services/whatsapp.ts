import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Whatsapp {
  private readonly number = '5535991949357';
  private readonly defaultMessage = 'Olá! Gostaria de agendar uma consulta.';

  open(message: string = this.defaultMessage): void {
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${this.number}?text=${encoded}`, '_blank');
  }
}
