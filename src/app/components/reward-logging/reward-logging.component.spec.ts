import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardLoggingComponent } from './reward-logging.component';

describe('RewardLoggingComponent', () => {
  let component: RewardLoggingComponent;
  let fixture: ComponentFixture<RewardLoggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RewardLoggingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RewardLoggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
