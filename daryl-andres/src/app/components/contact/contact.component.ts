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
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
  }

  isMessageSubmitted: boolean = false;

  constructor(private messageService: MessageService) {}

  resolved(captchaResponse: string | null) {
    console.log(captchaResponse);
    if (captchaResponse) {
      this.captchaResponse = captchaResponse;
    }
  }

  onSubmit(contactForm: NgForm) {
    if (!this.captchaResponse) {
      alert('Oops! It seems there was an issue with the reCAPTCHA');
      return;
    };

    if (this.contactFormData.firstname.trim() === "") {
      alert("Enter your first name");
      return;
    } else if (this.contactFormData.lastname.trim() === "") {
      alert("Enter your last name");
      return;
    } else if (this.contactFormData.email.trim() === "") {
      alert("Enter a valid email");
      return;
    } else if (this.contactFormData.subject.trim() === "") {
      alert("Enter a subject");
      return;
    } else if (this.contactFormData.firstname.trim() === "") {
      alert("Enter your message");
      return;
    };

    this.messageService.sendMessage(this.contactFormData).subscribe({
      next: (data) => {
        alert(`Thank you for reaching out to me. I'll get back to you as soon as possible.`);
        console.log('Message data:', data)
        contactForm.resetForm();
      },
      error: (error) => {
        alert(`There's an error sending your message. Please try again later.`);
        console.log('Error:', error);
      }
    })
  }
}
