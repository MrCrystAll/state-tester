import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterClipComponent } from './register-clip.component';

describe('RegisterClipComponent', () => {
  let component: RegisterClipComponent;
  let fixture: ComponentFixture<RegisterClipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterClipComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RegisterClipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
