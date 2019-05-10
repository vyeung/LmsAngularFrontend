import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDueDateComponent } from './edit-due-date.component';

describe('EditDueDateComponent', () => {
  let component: EditDueDateComponent;
  let fixture: ComponentFixture<EditDueDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDueDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDueDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
