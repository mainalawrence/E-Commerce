import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductPhotoSlideComponent } from './product-photo-slide.component';

describe('ProductPhotoSlideComponent', () => {
  let component: ProductPhotoSlideComponent;
  let fixture: ComponentFixture<ProductPhotoSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductPhotoSlideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductPhotoSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
