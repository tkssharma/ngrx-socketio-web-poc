import { Component, OnInit } from '@angular/core';
import { setCurrentTitle } from '@app/root-store/actions/ui-actions';
import { Store, select } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import * as fromRoot from '@app/root-store';
import { setUser } from '../ngrx/actions/ui-actions';
import { getUser } from '../ngrx';

@Component({
  selector: 'app-loading',
  template: `
    <img src="/assets/images/loading.svg">
  `,
  styles: [`
    :host {
      display: block;
    }
    img {
      display: block;
      margin: 20px auto;
      width: 50px;
    }
  `]
})
export class LoadingComponent  implements OnInit {
  constructor(private store: Store<fromRoot.State>) {}
  ngOnInit(): void {
    const data = localStorage.getItem('user');
    const UiUser = this.store.pipe(
      select(getUser)
    );
    console.log(UiUser);
    if (data) {
      const userData = JSON.parse(data);
      this.store.dispatch(setUser({payload: userData}));
    }

  }
}
