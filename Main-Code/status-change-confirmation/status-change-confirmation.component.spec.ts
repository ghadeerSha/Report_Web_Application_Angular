import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusChangeConfirmationComponent } from './status-change-confirmation.component';

describe('StatusChangeConfirmationComponent', () => {
  let component: StatusChangeConfirmationComponent;
  let fixture: ComponentFixture<StatusChangeConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusChangeConfirmationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusChangeConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
