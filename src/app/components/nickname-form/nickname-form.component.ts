import { Component } from '@angular/core';
import { FormArray, FormBuilder } from '@angular/forms';
import { NicknameValidator } from './nickname-validator.directive';

@Component({
  selector: 'ludan-nickname-form',
  styleUrls: ['nickname-form.component.scss'],
  template: `
    <form [formGroup]="nicknameForm">
      <div formArrayName="nicknames" class="form-group nicknames-group">
        <label>Nicknames: </label>

        <div *ngFor="let nickname of nicknames.controls; let i = index">
          <div class="row nickname-row no-gutters">
            <div class="col">
              <input
                type="text"
                [formControlName]="i"
                placeholder="Enter a nickname"
                type="text"
                class="form-control"
                [class.error]="
                  nicknames.controls[i].invalid &&
                  (nicknames.dirty || nicknames.touched)
                "
              />
            </div>
            <div class="col">
              <button
                (click)="removeNickname(i)"
                class="btn btn-danger remove-button"
                [disabled]="nicknames.length === 1"
              >
                Remove
              </button>
            </div>
          </div>
        </div>

        <button (click)="addNickname()" class="btn btn-secondary add-button">
          Add another nickname
        </button>
      </div>

      <div class="error-wrapper">
        <div
          *ngIf="nicknames.invalid && (nicknames.dirty || nicknames.touched)"
          class="alert alert-danger"
        >
          <div>All nicknames need to start with the letter 'a'</div>
        </div>
      </div>

      <button
        class="btn btn-primary add-button"
        [disabled]="!nicknameForm.valid"
        (click)="submit()"
      >
        Submit nicknames
      </button>
    </form>
  `
})
export class NickNameFormComponent {
  constructor(
    private fb: FormBuilder,
    private nicknameValidator: NicknameValidator
  ) {}

  nicknameForm = this.fb.group({
    nicknames: this.fb.array([
      this.fb.control('', {
        asyncValidators: [
          this.nicknameValidator.validate.bind(this.nicknameValidator)
        ]
      })
    ])
  });

  get nicknames() {
    return this.nicknameForm.get('nicknames') as FormArray;
  }

  addNickname() {
    this.nicknames.push(
      this.fb.control('', {
        asyncValidators: [
          this.nicknameValidator.validate.bind(this.nicknameValidator)
        ]
      })
    );
  }

  removeNickname(index: number) {
    this.nicknames.removeAt(index);
  }

  submit() {
    const nicknames = this.nicknameForm.value.nicknames;

    console.log('The nicknames are: ' + nicknames.join(', '));
  }
}
