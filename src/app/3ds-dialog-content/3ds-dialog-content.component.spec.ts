import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DSDialogContentComponent } from './3ds-dialog-content.component';

describe('DSDialogContentComponent', () => {
  let component: DSDialogContentComponent;
  let fixture: ComponentFixture<DSDialogContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DSDialogContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DSDialogContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
