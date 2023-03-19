import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePlumberComponent } from './single-plumber.component';

describe('SinglePlumberComponent', () => {
  let component: SinglePlumberComponent;
  let fixture: ComponentFixture<SinglePlumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglePlumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglePlumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
