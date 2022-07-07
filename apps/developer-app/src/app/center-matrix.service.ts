import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

import { Location } from '@tss/common-ctrm';

@Injectable({
  providedIn: 'root',
})
export class CenterMatrixService {
  constructor(private readonly http: HttpClient) {}
  /**
   *
   * @returns a number of center-matrixes
   */
  public getCenterMatrixCount() {
    return this.http.get<number>(`${environment.baseUrl}/center-matrix/count`);
  }
  /**
   *
   * @returns a collection of center locations
   */
  public getCenterMatrixCollection() {
    return this.http.get<Location[]>(`${environment.baseUrl}/center-matrix`);
  }
  /**
   *
   * @returns a single center location
   */
  public getCenterMatrix(id: number) {
    return this.http.get<Location>(
      `${environment.baseUrl}/center-matrix/${id}`
    );
  }
  /**
   *
   * @param location the data to create the center of
   * @returns a collection of created center locations
   */
  public postCenterMatrix(location: Location) {
    return this.http.post<Location[]>(
      `${environment.baseUrl}/center-matrix`,
      location
    );
  }
  /**
   *
   * @param id the id of the center to update
   * @param location the data to update the center of
   * @returns the updated location
   */
  public putCenterMatrix(id: number, location: Location) {
    return this.http.put<Location>(
      `${environment.baseUrl}/center-matrix/${id}`,
      location
    );
  }
  /**
   *
   * @param id the id of the center to delete
   * @returns
   */
  public deleteCenterMatrix(id: number) {
    return this.http.delete<Location>(
      `${environment.baseUrl}/center-matrix/${id}`
    );
  }
}
