import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../model/contacts';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  public searchName: string;
  public contact = new Contacts();
  public listContact: Storage[];
  public count = 0;

  constructor(){ 
    this.listContact = [];
  }

  ngOnInit() {
  }

  addContact(cont){
    this.listContact.push(cont);
    this.count = this.count + 1;
    this.contact = new Contacts();
  }
}
