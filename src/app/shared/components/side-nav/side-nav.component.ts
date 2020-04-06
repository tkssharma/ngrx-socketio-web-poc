import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild('sideNav') sideNav: MatDrawer;
  
  constructor(private router: Router) {
  }
  public toggleSidenav() {
    this.sideNav.toggle();
     this.router.navigate(['./poc-event-driven']);
  }
  ngOnInit() {
  }

}
