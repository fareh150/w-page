import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() tabs: { name: string; link: string; }[] = [];
  @Input() logoUrl: string | undefined;
  @Input() logoLink?: string;

  ngOnInit() {
    console.log(`Number of tabs: ${this.tabs.length}`);
  }
}
