import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSuccessComponent } from './update-success.component';

describe('UpdateSuccessComponent', () => {
  let component: UpdateSuccessComponent;
  let fixture: ComponentFixture<UpdateSuccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSuccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
