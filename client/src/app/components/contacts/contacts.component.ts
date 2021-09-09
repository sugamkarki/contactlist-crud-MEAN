import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import {
  APIResponse,
  Contact,
  ContactFromServer,
} from 'src/app/interfaces/contact';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  public contacts: ContactFromServer[] = [];
  constructor(private contactService: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.getContacts();
  }
  getContacts(): void {
    this.contactService
      .getContacts()
      .subscribe((params: ContactFromServer[]) => {
        this.contacts = params;
        console.log(params);
      });
  }
  delete(id: string): void {
    this.contactService
      .deleteContact(id)
      .subscribe((params: { msg: string }) => {
        this.getContacts();
      });
  }
  getDetails(id: string): void {
    this.router.navigate(['contact', id]);
  }
}
