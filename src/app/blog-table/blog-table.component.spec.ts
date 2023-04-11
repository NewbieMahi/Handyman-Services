import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogTableComponent } from './blog-table.component';

describe('BlogTableComponent', () => {
  let component: BlogTableComponent;
  let fixture: ComponentFixture<BlogTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
