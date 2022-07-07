import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';

const routes: Routes = [
  { path: 'welcome', component: NxWelcomeComponent },
  {
    path: 'centers',
    loadChildren: () =>
      import('./centers/centers.module').then((m) => m.CentersModule),
  },
  { path: '**', component: NxWelcomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
