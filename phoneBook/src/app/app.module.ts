import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactPipe } from './pipes/contact.pipe';
import { ContactsComponent } from './contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactPipe,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    
  ],
  providers: [ContactPipe],
  bootstrap: [AppComponent],
  exports: [ContactPipe]
})
export class AppModule { }
