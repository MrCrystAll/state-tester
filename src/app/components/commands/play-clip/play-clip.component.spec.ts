import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayClipComponent } from './play-clip.component';

describe('PlayClipComponent', () => {
  let component: PlayClipComponent;
  let fixture: ComponentFixture<PlayClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlayClipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlayClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
