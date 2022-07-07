import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CentersComponent } from './centers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CenterListFilterPipe } from './centerListFilter.pipe';
import { sortCenterPipe } from './sortCenterPipe.pipe';

@NgModule({
  declarations: [CentersComponent, CenterListFilterPipe, sortCenterPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: CentersComponent }]),
  ],
  exports: [RouterModule],
  providers: [],
})
export class CentersModule {}
