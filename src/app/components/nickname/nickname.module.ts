import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NicknameComponent } from './nickname.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NicknameComponent],
  exports: [NicknameComponent]
})
export class NicknameModule {}
