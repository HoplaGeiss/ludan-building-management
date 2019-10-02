import { BuildingFormService } from './building-form.service';
import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NicknameTargetEnum } from './building-form.interface';

@Component({
  selector: 'ludan-building-form',
  styleUrls: ['building-form.component.scss'],
  template: `
    <form [formGroup]="form" class="form">
      <ludan-nickname
        [group]="form.get('building')"
        label="Building nicknames:"
        (addEvent)="addNickname(nicknameTargetEnum.BUILDING)"
        (removeEvent)="removeNickname($event, nicknameTargetEnum.BUILDING)"
      ></ludan-nickname>

      <ludan-nickname
        [group]="form.get('room1')"
        label="Room 1 nicknames:"
        (addEvent)="addNickname(nicknameTargetEnum.ROOM1)"
        (removeEvent)="removeNickname($event, nicknameTargetEnum.ROOM1)"
      ></ludan-nickname>

      <button
        class="btn btn-primary add-button"
        [disabled]="!form.valid"
        (click)="submit()"
      >
        Submit
      </button>
    </form>
  `
})
export class BuildingFormComponent {
  constructor(private buildingFormService: BuildingFormService) {}
  nicknameTargetEnum = NicknameTargetEnum;

  get form(): FormGroup {
    return this.buildingFormService.buildingForm;
  }

  addNickname = (target: NicknameTargetEnum) => {
    this.buildingFormService.addNickname(target);
  }

  removeNickname = (index: number, target: NicknameTargetEnum) => {
    this.buildingFormService.removeNickname(index, target);
  }

  submit() {
    console.log('The value of the form is: ', this.form.value);
  }
}
