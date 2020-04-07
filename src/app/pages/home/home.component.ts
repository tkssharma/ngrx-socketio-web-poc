import { Component, OnInit, OnDestroy } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
  ngOnDestroy(): void {
    //throw new Error("Method not implemented.");
  }
  pageTitle = 'POC';

}
