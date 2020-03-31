import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sideNav') sideNav: MatDrawer;
  
  constructor() {
   }
  
  public toggleSidenav() {
    this.sideNav.toggle();
  }
  
  ngOnInit() {
  }

}
