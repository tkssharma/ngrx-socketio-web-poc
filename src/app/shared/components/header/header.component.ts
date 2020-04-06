import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AuthService } from '@app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() menuButtonClicked = new EventEmitter();

  public title='POC';
  
  public emitButtonClicked() {
    this.menuButtonClicked.emit();
  }
  public loginClicked(){
    this.auth.login();
  }

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

}
