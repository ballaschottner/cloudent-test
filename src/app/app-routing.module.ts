import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormfieldsComponent } from './formfields/formfields.component';

const routes: Routes = [
  {
    path: '', component: FormfieldsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
