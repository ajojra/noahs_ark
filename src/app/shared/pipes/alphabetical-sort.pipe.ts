import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'alphabeticalSort',
    pure: false
})
export class AlphabeticalSortPipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if(!value || value.length === 0) {
            return [];
        }
        const sortBy = args && args.length ? args[0] : 'nat';
        return value.sort((a: any, b: any) => {
            if (a[0][sortBy] < b[0][sortBy]) {
                return -1;
            } else if (a[0][sortBy] > b[0][sortBy]) {
                return 1;
            } else {
                return 0;
            }
        });
    }

}