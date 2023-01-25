import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'displayPhones'
})
export class DisplayPhonesPipe implements PipeTransform {
  transform(phones: string[]): string {
    return phones.join(', ');
  }
}
