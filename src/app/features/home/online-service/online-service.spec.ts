import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnlineService } from './online-service';

describe('OnlineService', () => {
  let component: OnlineService;
  let fixture: ComponentFixture<OnlineService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnlineService],
    }).compileComponents();

    fixture = TestBed.createComponent(OnlineService);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
