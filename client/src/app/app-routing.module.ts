import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { AddComponent } from './components/add/add.component';
import { ContactsComponent } from './components/contacts/contacts.component';

const routes: Routes = [
  {
    path: '',
    component: ContactsComponent,
  },
  {
    path: 'add',
    component: AddComponent,
  },
  {
    path: 'contact/:id',
    component: ContactComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
