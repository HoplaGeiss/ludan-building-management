import { NicknameService } from './nickname.service';

describe('NicknameService', () => {
  let service: NicknameService;

  beforeEach(() => {
    service = new NicknameService();
  });

  it('returns an observable with true for a nickname starting with a', (done: DoneFn) => {
    service.isValidNickname('abracadabra').subscribe(value => {
      expect(value).toBe(true);
      done();
    });
  });

  describe('returns an observable with false for nicknames not starting with a', () => {
    it('hello - ', (done: DoneFn) => {
      service.isValidNickname('hello').subscribe(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('empty string - ', (done: DoneFn) => {
      service.isValidNickname('').subscribe(value => {
        expect(value).toBe(false);
        done();
      });
    });

    it('number - ', (done: DoneFn) => {
      service.isValidNickname('123').subscribe(value => {
        expect(value).toBe(false);
        done();
      });
    });
  });
});
