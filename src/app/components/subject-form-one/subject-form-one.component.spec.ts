import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormOneComponent } from './subject-form-one.component';

describe('SubjectFormOneComponent', () => {
  let component: SubjectFormOneComponent;
  let fixture: ComponentFixture<SubjectFormOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFormOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFormOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
