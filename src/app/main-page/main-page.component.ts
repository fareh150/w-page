import { Component } from '@angular/core';
import { LayoutContainerComponent } from '../components/layout-container/layout-container.component';

@Component({
  selector: 'app-main-page',
  imports: [
    LayoutContainerComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor() { }

}
