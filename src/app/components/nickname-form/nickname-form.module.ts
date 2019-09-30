import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NickNameFormComponent } from './nickname-form.component';

@NgModule({
  imports: [ReactiveFormsModule, CommonModule],
  declarations: [NickNameFormComponent],
  exports: [NickNameFormComponent]
})
export class NickNameFormModule {}
