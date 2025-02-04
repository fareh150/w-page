import { Component, Input, OnInit, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  imports: [
    RouterLink,
    RouterLinkActive
  ]
})
export class NavbarComponent implements OnInit {
  open      = false;
  logoUrl   = signal<string | null>(null);
  logoText  = signal<string | null>(null);
  logoLink  = signal<string | null>(null);

  // Component Inputs
  @Input() tabs: { name: string; link: string; }[] = [];
  @Input() logoData: { url: string; text: string; link: string; } | undefined;

  ngOnInit(): void {
    this.checkLogoData();
  }

  checkLogoData() {
    if (this.logoData) {
      this.logoUrl.set(this.logoData.url && this.logoData.url.trim() !== '' ? this.logoData.url : null);
      this.logoText.set(this.logoData.text && this.logoData.text.trim() !== '' ? this.logoData.text : null);
      this.logoLink.set(this.logoData.link && this.logoData.link.trim() !== '' ? this.logoData.link : null);
    }
  }

  toggleOpen() {
    this.open = !this.open;
  }
}
