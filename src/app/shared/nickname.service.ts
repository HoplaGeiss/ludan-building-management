import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class NicknameService {
  // returns true in case the nickname starts with the letter a
  isValidNickname(nickname: string): Observable<boolean> {
    const isTaken = nickname.charAt(0) === 'a';

    return of(isTaken).pipe(delay(400)); // I am applying a 400ms delay to mock an HTTP call
  }
}
