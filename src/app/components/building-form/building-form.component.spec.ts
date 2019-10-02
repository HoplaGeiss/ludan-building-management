import { BuildingFormService } from './building-form.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuildingFormComponent } from './building-form.component';
import { BuildingFormModule } from './building-form.module';
import { NicknameTargetEnum } from './building-form.interface';

class BuildingFormServiceMock {
  addNickname = () => {};
  removeNickname = () => {};
}

describe('BuildingFormComponent', () => {
  let comp: BuildingFormComponent;
  let fixture: ComponentFixture<BuildingFormComponent>;
  let buildingFormService: BuildingFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BuildingFormModule],
      providers: [
        { provide: BuildingFormService, useClass: BuildingFormServiceMock }
      ]
    });

    fixture = TestBed.createComponent(BuildingFormComponent);
    comp = fixture.debugElement.componentInstance;

    buildingFormService = fixture.debugElement.injector.get(
      BuildingFormService
    );
  });

  it('addNickname', () => {
    const addSpy = spyOn(buildingFormService, 'addNickname');
    comp.addNickname(NicknameTargetEnum.BUILDING);
    expect(addSpy).toHaveBeenCalledWith(NicknameTargetEnum.BUILDING);
  });

  it('removeNickname', () => {
    const removeSpy = spyOn(buildingFormService, 'removeNickname');
    comp.removeNickname(2, NicknameTargetEnum.BUILDING);
    expect(removeSpy).toHaveBeenCalledWith(2, NicknameTargetEnum.BUILDING);
  });
});
