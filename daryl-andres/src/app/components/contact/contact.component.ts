import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactFormData = {
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    subject: '',
    message: '',
  }

  clearForm() {
    this.contactFormData.firstname = '';
    this.contactFormData.lastname = '';
    this.contactFormData.email = '';
    this.contactFormData.contact = '';
    this.contactFormData.subject = '';
    this.contactFormData.message = '';
  }

  onSubmit() {
    console.log('Submitting form');
    console.log(this.contactFormData);
  }
}
