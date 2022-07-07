import { Pipe, PipeTransform } from '@angular/core';

import { Location } from '@tss/common-ctrm';

@Pipe({ name: 'sortCenter' })
export class sortCenterPipe implements PipeTransform {
  transform(value: Location[]): Location[] {
    if (!value) return [];

    // ||value.length === how many locations exists so a possible null value will not push the entity to beginning
    return value.sort(
      (locA, locB) =>
        Number(locA.sortorder || value.length) -
        Number(locB.sortorder || value.length)
    );
  }
}
