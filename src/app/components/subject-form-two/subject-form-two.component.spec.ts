import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormTwoComponent } from './subject-form-two.component';

describe('SubjectFormTwoComponent', () => {
  let component: SubjectFormTwoComponent;
  let fixture: ComponentFixture<SubjectFormTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFormTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFormTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
