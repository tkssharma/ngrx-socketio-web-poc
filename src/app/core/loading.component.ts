import { Component, OnInit } from '@angular/core'
import { setCurrentTitle } from '@app/root-store/actions/ui-actions'
import { Store, select } from '@ngrx/store'
import { Observable, of } from 'rxjs'
import * as fromRoot from '@app/root-store'
import { setUser } from '../ngrx/actions/ui-actions'
import { getUser } from '../ngrx'
import { MatSliderModule } from '@angular/material/slider'
import { AuthService } from '@app/auth/auth.service'

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss'],
})
export class LoadingComponent implements OnInit {
  public data
  constructor(
    private store: Store<fromRoot.State>,
    private _authservice: AuthService
  ) {}
  ngOnInit(): void {
    const data = localStorage.getItem('user')
    const UiUser = this.store.pipe(select(getUser))
    // tslint:disable-next-line: no-shadowed-variable
    UiUser.subscribe((data1) => {
      this.data = data1
    })
    if (data) {
      const userData = JSON.parse(data)
      this.store.dispatch(setUser({ payload: userData }))
    }
  }
  logout() {
    this._authservice.logout()
  }
  testAPI() {}
}
