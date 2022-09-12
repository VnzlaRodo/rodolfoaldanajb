import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperCuboComponent } from './swiper-cubo.component';

describe('SwiperCuboComponent', () => {
  let component: SwiperCuboComponent;
  let fixture: ComponentFixture<SwiperCuboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwiperCuboComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperCuboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
