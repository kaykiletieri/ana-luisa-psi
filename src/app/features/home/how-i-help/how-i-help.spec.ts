import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowIHelp } from './how-i-help';

describe('HowIHelp', () => {
  let component: HowIHelp;
  let fixture: ComponentFixture<HowIHelp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HowIHelp],
    }).compileComponents();

    fixture = TestBed.createComponent(HowIHelp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
