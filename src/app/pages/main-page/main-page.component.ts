import { Component } from '@angular/core';
import { LayoutContainerComponent } from '../../components/layout-container/layout-container.component';
import { ImageBannerComponent } from '../../components/image-banner/image-banner.component';
import { FieldSeparatorComponent } from '../../components/field-separator/field-separator.component';
import { ImageTextBlockComponent } from '../../components/image-text-block/image-text-block.component';

@Component({
  selector: 'app-main-page',
  imports: [
    LayoutContainerComponent,
    ImageBannerComponent,
    FieldSeparatorComponent,
    ImageTextBlockComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  date = '2010-05-01';
  getDaysSinceDate(): number {
    const currentDate = new Date();
    const startDate = new Date(this.date);
    const timeDifference = currentDate.getTime() - startDate.getTime();
    const daysDifference = Math.floor(timeDifference / (1000 * 3600 * 24));
    return daysDifference;
  }

  bannerTitle = '¡Nos Casamos!';
  bannerImageUrl = 'https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

  firstBlockTitle = 'De ese primer encuentro a este gran día!';
  firstBlockImageUrl = 'https://images.unsplash.com/photo-1601805504386-ad769c7522f9?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';
  fisrtBlockText = `
  Hace exactamente ${this.getDaysSinceDate()} días que nos cruzamos en el colegio y, tras tantos momentos compartidos, aquí estamos, planeando nuestra boda.

  Después de hablar de casarnos, Alba se adelantó y lanzó la gran pregunta en nuestro parque de siempre. La respuesta fue sí.

  A lo largo de los años, hemos aprendido que lo mejor es vivir juntos… incluso cuando alguien se come la última loncha de jamón.

  ¡Y ahora, después de todo este tiempo, nos casamos!
  `;

}
