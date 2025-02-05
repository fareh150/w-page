import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-text-block',
  imports: [],
  templateUrl: './image-text-block.component.html',
  styleUrl: './image-text-block.component.css'
})
export class ImageTextBlockComponent {
  @Input() imageUrl: string = ''; // URL de la imagen
  @Input() text: string = ''; // Texto del párrafo
  @Input() imageRight: boolean = false; // Controla la posición de la imagen
  @Input() title: string = ''; // Título del bloque
}
