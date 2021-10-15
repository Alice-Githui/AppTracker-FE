import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import { PotentialComponent } from './components/potential/potential.component';
import { AllPotentialsComponent } from './components/all-potentials/all-potentials.component';

const routes:Routes=[
  {path: 'new-potential', component: PotentialComponent},
  {path: 'all-potentials', component: AllPotentialsComponent},
  { path: '', redirectTo:"/all-potentials", pathMatch:"full"},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
