import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedServiceComponent } from './completed-service.component';

describe('CompletedServiceComponent', () => {
  let component: CompletedServiceComponent;
  let fixture: ComponentFixture<CompletedServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedServiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
