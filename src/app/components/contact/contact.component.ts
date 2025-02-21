import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import type { MessageData } from '../../interface/contact';
import { MessageService } from '@services/message/message.service';
import {
  faPaperPlane,
  faUser,
  faEnvelope,
  faPhone,
  faPencilAlt,
} from '@fortawesome/free-solid-svg-icons';
import { environment } from '@env/environment';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgClass, NgIf } from '@angular/common';
import { RecaptchaModule } from 'ng-recaptcha';

declare var grecaptcha: any;

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FontAwesomeModule, NgClass, NgIf, RecaptchaModule, FormsModule],
  templateUrl: './contact.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
})
export class ContactComponent {
  messageService = inject(MessageService);

  sitekey: string = environment.recaptchaSiteKey;
  captchaResponse = '';

  faPaperPlane = faPaperPlane;
  faUser = faUser;
  faEnvelope = faEnvelope;
  faPhone = faPhone;
  faPencilAlt = faPencilAlt;

  contactFormData: MessageData = {
    name: '',
    email: '',
    contact_number: '',
    subject: '',
    message: '',
    captchaResponse: '',
  };

  isLoading = false;

  resolved(captchaResponse: string | null) {
    if (captchaResponse) {
      this.captchaResponse = captchaResponse;
      this.contactFormData.captchaResponse = captchaResponse;
    }
  }

  onSubmit(contactForm: NgForm) {
    if (!this.contactFormData.captchaResponse) {
      alert('Oops! It seems there was an issue with the reCAPTCHA');
      return;
    }

    if (contactForm.invalid) {
      return;
    }

    this.isLoading = true;
    this.messageService.sendMessage(this.contactFormData).subscribe({
      next: (data) => {
        this.isLoading = false;
        alert(
          `It's great to hear from you. I'll get back to you as soon as possible.`
        );
        contactForm.resetForm();
        this.contactFormData.captchaResponse = '';
        this.captchaResponse = '';
        grecaptcha.reset();
      },
      error: (error) => {
        this.isLoading = false;
        alert(`Failed: ${error.statusText}`);
        this.contactFormData.captchaResponse = '';
        this.captchaResponse = '';
        grecaptcha.reset();
      },
    });
  }
}
