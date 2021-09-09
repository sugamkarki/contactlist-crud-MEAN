import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
