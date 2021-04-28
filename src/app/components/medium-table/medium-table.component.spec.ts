import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediumTableComponent } from './medium-table.component';

describe('MediumTableComponent', () => {
  let component: MediumTableComponent;
  let fixture: ComponentFixture<MediumTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MediumTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MediumTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
