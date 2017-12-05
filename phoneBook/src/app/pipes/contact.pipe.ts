import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contact',
  pure: false
})

export class ContactPipe implements PipeTransform {

  transform(listContact: any, searchName?: string): any {
    //check if search not exists
    if (searchName === undefined)
    return listContact; 

    return listContact.filter(function(list){
      //return boolean... If true it stores the value in the array else remove it
       return list.name.toLowerCase().includes(searchName.toLowerCase());
    })
  }
}
