import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarProjectComponent } from './car-project.component';

describe('CarProjectComponent', () => {
  let component: CarProjectComponent;
  let fixture: ComponentFixture<CarProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
