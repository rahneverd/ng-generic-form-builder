import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenericFormBuilderComponent } from './components/generic-form-builder/generic-form-builder.component';
import { GenericFormComponent } from './components/generic-form/generic-form.component';

const routes: Routes = [
  { path: 'genericForm', component: GenericFormComponent },
  { path: '', component: GenericFormBuilderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
