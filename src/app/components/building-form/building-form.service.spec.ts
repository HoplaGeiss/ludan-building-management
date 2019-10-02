import { NicknameTargetEnum } from './building-form.interface';
import { BuildingFormService } from './building-form.service';
import { NicknameValidator } from './nickname-validator.directive';
import { FormBuilder } from '@angular/forms';
import { of } from 'rxjs';

describe('BuildingFormService', () => {
  let service: BuildingFormService;

  beforeEach(() => {
    service = new BuildingFormService(
      new NicknameValidator({
        isValidNickname: () => of(true)
      }),
      new FormBuilder()
    );
  });

  it('addNickname', () => {
    service.addNickname(NicknameTargetEnum.BUILDING);
    expect(service.buildingForm.get('building').value.nicknames.length).toBe(2);
    expect(service.buildingForm.get('room1').value.nicknames.length).toBe(1);
  });

  it('removeNickname', () => {
    service.addNickname(NicknameTargetEnum.BUILDING);
    service.addNickname(NicknameTargetEnum.BUILDING);
    service.addNickname(NicknameTargetEnum.BUILDING);
    service.getNicknames(NicknameTargetEnum.BUILDING).setValue([1, 2, 3, 4]);
    service.removeNickname(2, NicknameTargetEnum.BUILDING);
    expect(service.getNicknames(NicknameTargetEnum.BUILDING).value).toEqual([
      1,
      2,
      4
    ]);
  });
});
