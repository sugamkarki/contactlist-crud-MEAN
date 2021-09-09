import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIResponse, Contact } from '../interfaces/contact';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  url = 'http://localhost:3000/api/contact';
  constructor(private http: HttpClient) {}
  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.url);
  }
  addContact(params: Contact) {
    return this.http.post<{ msg: string }>(this.url, {
      first_name: params.first_name,
      last_name: params.last_name,
      phone: params.phone,
    });
  }
  deleteContact(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
