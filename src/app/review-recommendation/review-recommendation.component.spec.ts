import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewRecommendationComponent } from './review-recommendation.component';

describe('ReviewRecommendationComponent', () => {
  let component: ReviewRecommendationComponent;
  let fixture: ComponentFixture<ReviewRecommendationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewRecommendationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReviewRecommendationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
