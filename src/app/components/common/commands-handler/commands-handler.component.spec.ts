import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandsHandlerComponent } from './commands-handler.component';

describe('CommandsHandlerComponent', () => {
  let component: CommandsHandlerComponent;
  let fixture: ComponentFixture<CommandsHandlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandsHandlerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommandsHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
