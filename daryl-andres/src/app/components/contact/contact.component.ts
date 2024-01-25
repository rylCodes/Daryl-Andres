import { Component } from '@angular/core';
import { MessageData } from '../../interface/contact';
import { MessageService } from '../../services/message/message.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactFormData: MessageData = {
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
  }

  constructor(private messageService: MessageService) {}

  clearForm() {
    this.contactFormData.firstname = '';
    this.contactFormData.lastname = '';
    this.contactFormData.email = '';
    this.contactFormData.contact = '';
    this.contactFormData.subject = '';
    this.contactFormData.message = '';
  }

  onSubmit() {
    this.messageService.sendMessage(this.contactFormData).subscribe({
      next: (data) => {
        alert(`Thank you for reaching out to me. I'll get back to you as soon as possible.`);
        console.log('Message data:', data)
      },
      error: (error) => {
        alert(`There's an error sending your message. Please try again later.`);
        console.log('Error:', error);
      }
    })
  }
}
