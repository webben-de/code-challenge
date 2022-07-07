import { Pipe, PipeTransform } from '@angular/core';

import { Location } from '@tss/common-ctrm';

@Pipe({ name: 'centerListFilter' })
export class CenterListFilterPipe implements PipeTransform {
  transform(value: Location[] | null, args: string): Location[] {
    if (!value) return [];
    return value.filter((l) => JSON.stringify(l).includes(args));
  }
}
