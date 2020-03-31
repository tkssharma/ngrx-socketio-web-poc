import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from './shared/components/side-nav/side-nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @ViewChild('sideNav') sideNav: SideNavComponent;
  
  public toggleSideNav() {
    this.sideNav.toggleSidenav();
  };

  ngOnInit(){
  }
}
