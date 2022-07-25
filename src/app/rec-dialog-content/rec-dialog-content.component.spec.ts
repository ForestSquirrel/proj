import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecDialogContentComponent } from './rec-dialog-content.component';

describe('RecDialogContentComponent', () => {
  let component: RecDialogContentComponent;
  let fixture: ComponentFixture<RecDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
