import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarState } from '../../store/store.model';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(){
  }
}
