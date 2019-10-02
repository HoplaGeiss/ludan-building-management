import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NicknameModule } from './../nickname/nickname.module';
import { BuildingFormComponent } from './building-form.component';
import { BuildingFormService } from './building-form.service';

@NgModule({
  imports: [ReactiveFormsModule, NicknameModule],
  declarations: [BuildingFormComponent],
  providers: [BuildingFormService],
  exports: [BuildingFormComponent]
})
export class BuildingFormModule {}
