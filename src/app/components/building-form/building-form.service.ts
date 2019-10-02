import { Injectable } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';

import { NicknameValidator } from './nickname-validator.directive';
import { NicknameTargetEnum } from './building-form.interface';

@Injectable()
export class BuildingFormService {
  public buildingForm: FormGroup;

  constructor(
    private nicknameValidator: NicknameValidator,
    private fb: FormBuilder
  ) {
    this.buildingForm = this.fb.group({
      building: this.fb.group({
        nicknames: this.fb.array([
          this.fb.control('', {
            asyncValidators: [
              this.nicknameValidator.validate.bind(this.nicknameValidator)
            ]
          })
        ])
      }),
      room1: this.fb.group({
        nicknames: this.fb.array([
          this.fb.control('', {
            asyncValidators: [
              this.nicknameValidator.validate.bind(this.nicknameValidator)
            ]
          })
        ])
      })
    });
  }

  addNickname(target: NicknameTargetEnum) {
    this.getNicknames(target).push(
      this.fb.control('', {
        asyncValidators: [
          this.nicknameValidator.validate.bind(this.nicknameValidator)
        ]
      })
    );
  }

  getNicknames(target: NicknameTargetEnum) {
    return this.buildingForm.get(target).get('nicknames') as FormArray;
  }

  removeNickname(index: number, target: NicknameTargetEnum) {
    this.getNicknames(target).removeAt(index);
  }
}
