import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NickNameFormComponent } from './nickname-form.component';
import { NickNameFormModule } from './nickname-form.module';

describe('NickNameFormComponent', () => {
  let comp: NickNameFormComponent;
  let fixture: ComponentFixture<NickNameFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NickNameFormModule]
    });

    fixture = TestBed.createComponent(NickNameFormComponent);
    comp = fixture.debugElement.componentInstance;
  });

  it('addNickname', () => {
    expect(comp.nicknames.length).toBe(1);
    comp.addNickname();
    expect(comp.nicknames.length).toBe(2);
  });

  it('removeNickname', () => {
    comp.addNickname();
    comp.addNickname();
    comp.addNickname();
    comp.nicknames.setValue(['1', '2', '3', '4']);
    expect(comp.nicknames.value).toEqual(['1', '2', '3', '4']);
    comp.removeNickname(2);
    expect(comp.nicknames.value).toEqual(['1', '2', '4']);
  });
});
