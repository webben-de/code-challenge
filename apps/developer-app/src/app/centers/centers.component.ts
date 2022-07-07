import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Location } from '@tss/common-ctrm';

import { CenterMatrixService } from '../center-matrix.service';

@Component({
  selector: 'tss-job-interview-centers',
  templateUrl: './centers.component.html',
})
export class CentersComponent implements OnInit {
  /**
   * the location id of the currently hoverd location
   */
  hoveredItemId?: number;
  /**
   * indicates if the dialog should be shown
   */
  showCreateDialog = false;
  /**
   * an async list of locations
   */
  locations!: Observable<Location[]>;
  /**
   * an async count of locations
   */
  locationsCount!: Observable<number>;
  /**
   * A string to filter the location collection by
   */
  centerFilterValue = '';
  /**
   * A form group to create and update a location
   */
  formGroup = new FormGroup({
    id: new FormControl(),
    center_name: new FormControl('some center name', [Validators.required]),
    GSSN_COMPANYID: new FormControl('some company id', [Validators.required]),
    GSSN_OUTLETID: new FormControl('some outlet id', [Validators.required]),
    vd_name: new FormControl(),
    vfnr: new FormControl(),
    vfnr_hb: new FormControl(),
    mode: new FormControl(),
    sortorder: new FormControl(),
    brand: new FormControl(),
    status: new FormControl(),
    shortcut: new FormControl(),
    company_name: new FormControl(),
    branch: new FormControl(),
    street: new FormControl(),
    zip: new FormControl(),
    place: new FormControl(),
    region: new FormControl(),
    phone: new FormControl(),
    website: new FormControl(),
  });

  constructor(private centerMatrixService: CenterMatrixService) {}

  ngOnInit(): void {
    this.updateLocations();
  }
  /**
   * either update the an location if a id is provided or create one if not
   */
  submit() {
    if (!this.formGroup.value.id) {
      this.centerMatrixService
        .postCenterMatrix(this.formGroup.value)
        .subscribe(() => {
          this.formGroup.reset();
          this.updateLocations();
        });
    } else {
      this.centerMatrixService
        .putCenterMatrix(this.formGroup.value.id, this.formGroup.value)
        .subscribe(() => {
          this.formGroup.reset();
          this.updateLocations();
        });
    }
  }
  /**
   * Updates the view with current data when these are potentionally changed
   * would be better with an effect in a store
   */
  updateLocations() {
    this.locations = this.centerMatrixService.getCenterMatrixCollection();
    this.locationsCount = this.centerMatrixService.getCenterMatrixCount();
  }
  /**
   * The delete the location with the passed id
   * @param id
   */
  deleteLocation(id: number) {
    this.centerMatrixService.deleteCenterMatrix(id).subscribe(() => {
      this.updateLocations();
    });
  }
  /**
   * patches the form with a location
   * @param loc
   */
  fillFormToUpdate(loc: Location) {
    this.formGroup.patchValue(loc);
    this.showCreateDialog = true;
  }
  /**
   *
   * @param index
   * @param el
   * @returns
   */
  trackByMethod(index: number, el: Location): number {
    return el.id ? el.id : 0;
  }
}
