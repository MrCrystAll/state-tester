import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'component-activation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './activation.component.html',
  styleUrl: './activation.component.css'
})
export class ActivationComponent {
  activationForm: FormGroup = new FormGroup({
    'active': new FormControl(true)
  })

  onActivationChange() {

  }
}
