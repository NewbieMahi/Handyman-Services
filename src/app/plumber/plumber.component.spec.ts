import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlumberComponent } from './plumber.component';

describe('PlumberComponent', () => {
  let component: PlumberComponent;
  let fixture: ComponentFixture<PlumberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlumberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
