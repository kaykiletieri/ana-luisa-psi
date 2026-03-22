import { Component } from '@angular/core';
import { LucideAngularModule, Phone, Mail, Instagram, Linkedin } from 'lucide-angular';
import { ScrollAnimateDirective } from '../../../core/directives/scroll-animate.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ScrollAnimateDirective, LucideAngularModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  readonly Phone = Phone;
  readonly Mail = Mail;
  readonly Instagram = Instagram;
  readonly Linkedin = Linkedin;

  readonly email = 'psi.anaalmeiida14@gmail.com';
  readonly instagramUsername = 'psi.anaalmeiida';
  readonly phoneNumber = '(35) 99194-9357';

  readonly currentYear = new Date().getFullYear();

  readonly contact = {
    phone: this.phoneNumber,
    phoneHref: `tel:+55${this.phoneNumber.replace(/\D/g, '')}`,
    email: this.email,
    emailHref: `mailto:${this.email}`,
    instagram: `@${this.instagramUsername}`,
    instagramHref: `https://www.instagram.com/${this.instagramUsername}/`,
    linkedin: 'Ana Luísa Almeida',
    linkedinHref: 'https://www.linkedin.com/in/anaalmeiida'
  };
}
