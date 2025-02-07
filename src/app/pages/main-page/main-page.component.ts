import { Component, inject, OnInit, signal } from '@angular/core';
import { LayoutContainerComponent } from '../../components/layout-container/layout-container.component';
import { ImageBannerComponent } from '../../components/image-banner/image-banner.component';
import { FieldSeparatorComponent } from '../../components/field-separator/field-separator.component';
import { ImageTextBlockComponent } from '../../components/image-text-block/image-text-block.component';
import { TitleWithContentComponent } from '../../components/title-with-content/title-with-content.component';
import { CountdownService } from '../../services/countdown.service';

@Component({
  selector: 'app-main-page',
  imports: [
    LayoutContainerComponent,
    ImageBannerComponent,
    FieldSeparatorComponent,
    ImageTextBlockComponent,
    TitleWithContentComponent
  ],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent implements OnInit {

  private countdown = inject(CountdownService);

  targetDate = new Date('2026-05-01T00:00:00');
  elapsedYears = signal<number>(0);
  elapsedMonths = signal<number>(0);
  elapsedDays = signal<number>(0);
  elapsedHours = signal<number>(0);
  elapsedMinutes = signal<number>(0);
  elapsedSeconds = signal<number>(0);

  startDateTime = new Date('2010-05-01T00:00:00');
  currentDays = signal<number>(0);

  ngOnInit(): void {
    setInterval(() => this.getTimeData(), 1000);
  }

  getTimeData() {
    const { years, months, days, hours, minutes, seconds } = this.countdown.getTimeElapsed(this.targetDate);
     this.elapsedYears.set(years);
     this.elapsedMonths.set(months);
     this.elapsedDays.set(days);
     this.elapsedHours.set(hours);
     this.elapsedMinutes.set(minutes);
     this.elapsedSeconds.set(seconds);

    const currentDays = this.countdown.getDaysElapsed(this.startDateTime);
    this.currentDays.set(currentDays);
  }
 //https://images.unsplash.com/photo-1466684921455-ee202d43c1aa?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
}
