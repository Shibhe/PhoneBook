import { Contacts } from "../model/contacts";

export class Storage {
  constructor(
    public name: string = '',
    public phoneNumber: string = '',
    public email: string = '',
    public address: string = ''
    ){
}
}