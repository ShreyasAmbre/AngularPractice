import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObsComponent } from './subject-obs.component';

describe('SubjectObsComponent', () => {
  let component: SubjectObsComponent;
  let fixture: ComponentFixture<SubjectObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectObsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
