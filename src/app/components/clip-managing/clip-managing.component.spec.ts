import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClipManagingComponent } from './clip-managing.component';

describe('ClipManagingComponent', () => {
  let component: ClipManagingComponent;
  let fixture: ComponentFixture<ClipManagingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClipManagingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClipManagingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
