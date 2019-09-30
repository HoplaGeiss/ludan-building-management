import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors
} from '@angular/forms';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { NicknameService } from '../../shared/nickname.service';

@Injectable({ providedIn: 'root' })
export class NicknameValidator implements AsyncValidator {
  constructor(private nicknameService: NicknameService) {}

  validate(ctrl: AbstractControl): Observable<ValidationErrors | null> {
    return this.nicknameService.isValidNickname(ctrl.value).pipe(
      map(isValid => (isValid ? null : { nicknameInvalid: true })),
      catchError(() => null)
    );
  }
}
