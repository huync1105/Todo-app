import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearTaskComponent } from './clear-task.component';

describe('ClearTaskComponent', () => {
  let component: ClearTaskComponent;
  let fixture: ComponentFixture<ClearTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClearTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
