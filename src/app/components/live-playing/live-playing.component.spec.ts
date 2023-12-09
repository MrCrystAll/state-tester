import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivePlayingComponent } from './live-playing.component';

describe('LivePlayingComponent', () => {
  let component: LivePlayingComponent;
  let fixture: ComponentFixture<LivePlayingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LivePlayingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LivePlayingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
