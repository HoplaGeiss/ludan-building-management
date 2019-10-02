import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormArray, FormGroup } from '@angular/forms';

@Component({
  selector: 'ludan-nickname',
  styleUrls: ['./nickname.component.scss'],
  template: `
    <div [formGroup]="group">
      <div formArrayName="nicknames" class="form-group nicknames-group">
        <label>{{ label }}</label>

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

        <div class="error-wrapper">
          <div
            *ngIf="nicknames.invalid && (nicknames.dirty || nicknames.touched)"
            class="alert alert-danger"
          >
            <div>All nicknames need to start with the letter 'a'</div>
          </div>
        </div>

        <button (click)="addNickname()" class="btn btn-secondary add-button">
          Add another nickname
        </button>
      </div>
    </div>
  `
})
export class NicknameComponent {
  @Input() group: FormGroup;
  @Input() label: string;
  @Output() addEvent = new EventEmitter();
  @Output() removeEvent = new EventEmitter();

  get nicknames(): FormArray {
    return this.group.get('nicknames') as FormArray;
  }

  addNickname = () => {
    this.addEvent.emit();
  }

  removeNickname = (index: number) => {
    this.removeEvent.emit(index);
  }
}
