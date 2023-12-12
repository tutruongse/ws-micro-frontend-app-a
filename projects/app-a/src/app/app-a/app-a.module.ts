import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppAHomeComponent } from './app-a-home/app-a-home.component';

export const APP_A_ROUTES: Routes = [
  {
    path: '',
    component: AppAHomeComponent,
  }
];

@NgModule({
  declarations: [AppAHomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(APP_A_ROUTES)
  ]
})
export class AppAModule { }
