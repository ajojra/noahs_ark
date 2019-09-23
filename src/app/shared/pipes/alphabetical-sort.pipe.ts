import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'alphabeticalSort'
})
export class AlphabeticalSortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return value;
  }

}
