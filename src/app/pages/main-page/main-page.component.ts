import { Component } from '@angular/core';
import { LayoutContainerComponent } from '../../components/layout-container/layout-container.component';
import { ImageBannerComponent } from '../../components/image-banner/image-banner.component';
import { FieldSeparatorComponent } from '../../components/field-separator/field-separator.component';

@Component({
  selector: 'app-main-page',
  imports: [
    LayoutContainerComponent,
    ImageBannerComponent,
    FieldSeparatorComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {
  bannerTitle = 'Bienvenidos a la web de nuestra boda!';
  bannerImageUrl = 'https://images.unsplash.com/photo-1507915977619-6ccfe8003ae6?q=80&w=2667&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}
