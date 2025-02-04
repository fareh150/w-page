import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLink,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  year = signal<number>(2024);
  text = signal<string | null>(null);

  // Component Inputs
  @Input() customText?: string;
  @Input() tabs: { name: string; link: string; }[] = [];
  @Input() customYear?: number | undefined;


  ngOnInit(): void {
    this.dataCheck();
  }

  dataCheck() {
    if (this.customYear !== undefined) {
      this.year.set(this.customYear);
    }
    if (this.customText) {
      this.text.set(this.customText);
    }
  }

}
