import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    FormComponent
  ],
  declarations: [FormComponent, DropdownComponent]
})
export class FormModule {
}
