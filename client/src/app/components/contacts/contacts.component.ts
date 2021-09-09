import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { APIResponse, Contact } from 'src/app/interfaces/contact';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public contacts: Contact[] = [];
  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService.getContacts().subscribe((params: Contact[]) => {
      this.contacts = params;
      console.log(params);
    });
  }
}
