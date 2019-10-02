import { NicknameTargetEnum } from './../building-form/building-form.interface';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { storiesOf } from '@storybook/angular';
import { Subject } from 'rxjs';
import { NicknameValidator } from './../building-form/nickname-validator.directive';
import { NicknameModule } from './nickname.module';

@Component({
  selector: 'ludan-story',
  template: `
    <div style="margin: auto; width: 80%; margin-top: 10%">
      <h1 style="border-bottom: 1px solid #ccc;">Nickname</h1>
      <div>
        <ludan-nickname
          [group]="form.get('building')"
          label="Building nicknames:"
          (addEvent)="addNickname(nicknameTargetEnum.BUILDING)"
          (removeEvent)="removeNickname($event, nicknameTargetEnum.BUILDING)"
        ></ludan-nickname>
      </div>
    </div>
  `
})
class MockComponent implements OnDestroy, OnInit {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  form;
  label = 'Building nicknames:';
  nicknameTargetEnum = NicknameTargetEnum;

  constructor(
    private nicknameValidator: NicknameValidator,
    private fb: FormBuilder
  ) {}

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }

  ngOnInit() {
    this.form = this.fb.group({
      building: this.fb.group({
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

  addNickname = target => {
    console.log('addNickname', target);
  }

  removeNickname = (index, target) => {
    console.log('removeNickname', target, index);
  }
}

storiesOf('Nickname', module).add('Example', () => ({
  moduleMetadata: {
    imports: [NicknameModule],
    declarations: [MockComponent]
  },
  template: `
    <ludan-story></ludan-story>
  `
}));
