import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Contact } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent implements OnInit {
  contact: Contact = {} as Contact;
  constructor(
    private contactService: ContactService,
    private toastr: ToastrService
  ) {
    // this.addContactForm
    this.initContact();
  }
  initContact(): void {
    this.contact = {
      first_name: '',
      last_name: '',
      phone: '',
    };
  }
  ngOnInit(): void {}
  submitForm(): void {
    // console.log(this.contact);
    this.contactService
      .addContact(this.contact)
      .subscribe((params: { msg: string }) => {
        this.toastr.success('Contact Added');
        this.initContact();
      });
  }
}
