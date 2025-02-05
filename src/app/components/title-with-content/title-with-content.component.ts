import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title-with-content',
  imports: [],
  templateUrl: './title-with-content.component.html',
  styleUrl: './title-with-content.component.css'
})
export class TitleWithContentComponent {
  @Input() title: string = ''; // Título que se mostrará
}
