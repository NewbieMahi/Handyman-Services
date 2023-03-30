import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElecticianComponent } from './electician.component';

describe('ElecticianComponent', () => {
  let component: ElecticianComponent;
  let fixture: ComponentFixture<ElecticianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElecticianComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElecticianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
