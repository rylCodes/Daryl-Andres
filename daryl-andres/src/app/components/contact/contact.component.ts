import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MessageData } from '../../interface/contact';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  sitekey: string = '6LfA8FwpAAAAAJQMFUAdYkbMuegK6bC55IjkVsK7'
  captchaResponse: string = ''

  contactFormData: MessageData = {
    name: '',
    email: '',
    contact_number: '',
    subject: '',
    message: '',
    captchaResponse: '',
  }

  isLoading: boolean = false;

  constructor(private messageService: MessageService) {}

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
    };

    if (this.contactFormData.name.trim() === "") {
      alert("Please enter your name");
      return;
    } else if (this.contactFormData.email.trim() === "") {
      alert("Please enter a valid email");
      return;
    } else if (this.contactFormData.subject.trim() === "") {
      alert("Please enter a subject");
      return;
    } else if (this.contactFormData.message.trim() === "") {
      alert("Please enter your message");
      return;
    };

    this.isLoading = true;
    this.messageService.sendMessage(this.contactFormData).subscribe({
      next: (data) => {
        this.isLoading = false;
        alert(`It's great to hear from you. I'll get back to you as soon as possible.`);
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
      }
    })
  }
}
