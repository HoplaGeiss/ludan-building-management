import { NicknameValidator } from './nickname-validator.directive';
import { of } from 'rxjs';
import { FormControl } from '@angular/forms';

describe('NicknameValidator', () => {
  it('[nicknameService says the nickname is valid] => returns null', (done: DoneFn) => {
    const nicknameValidator = new NicknameValidator({
      isValidNickname: () => of(true)
    });

    nicknameValidator.validate(new FormControl('1234')).subscribe(value => {
      expect(value).toBe(null);
      done();
    });
  });

  it('[nicknameService says the nickname is invalid] => returns error', (done: DoneFn) => {
    const nicknameValidator = new NicknameValidator({
      isValidNickname: () => of(false)
    });

    nicknameValidator.validate(new FormControl('1234')).subscribe(value => {
      expect(value).toEqual({ nicknameInvalid: true });
      done();
    });
  });
});
