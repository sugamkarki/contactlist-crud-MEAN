import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactFromServer } from 'src/app/interfaces/contact';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  id = '';
  user: ContactFromServer = {} as ContactFromServer;
  constructor(
    private activatedRoute: ActivatedRoute,
    private contactService: ContactService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.getContactDetails(this.id);
    });
  }
  getContactDetails(id: string) {
    this.contactService
      .getContact(id)
      .subscribe((params: ContactFromServer) => {
        // console.log(params);
        this.user = params;
      });
  }
  delete(id: string): void {
    this.contactService
      .deleteContact(id)
      .subscribe((params: { msg: string }) => {
        this.toastrService.error('Contact Deleted Successfully');
        setTimeout(() => {
          this.router.navigate(['']);
        }, 1000);
      });
  }
}
