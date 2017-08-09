import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes, { useHash: false })],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
