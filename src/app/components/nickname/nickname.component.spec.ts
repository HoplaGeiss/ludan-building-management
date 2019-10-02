import { NicknameComponent } from './nickname.component';
import { NicknameModule } from './nickname.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('NicknameComponent', () => {
  let comp: NicknameComponent;
  let fixture: ComponentFixture<NicknameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NicknameModule]
    });

    fixture = TestBed.createComponent(NicknameComponent);
    comp = fixture.debugElement.componentInstance;
  });
  it('addNickname', () => {
    const addSpy = spyOn(comp.addEvent, 'emit');
    comp.addNickname();
    expect(addSpy).toHaveBeenCalled();
  });

  it('removeNickname', () => {
    const removeSpy = spyOn(comp.removeEvent, 'emit');
    comp.removeNickname(1);
    expect(removeSpy).toHaveBeenCalledWith(1);
  });
});
