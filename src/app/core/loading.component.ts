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
   <div>
   Email : {{data?.email}} <br/>
   Email : {{data?.given_name}} <br/>
   Email : {{data?.name}} <br/>
   </div>
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
  public data;
  constructor(private store: Store<fromRoot.State>) {}
  ngOnInit(): void {
    const data = localStorage.getItem('user');
    const UiUser = this.store.pipe(
      select(getUser)
    );
    // tslint:disable-next-line: no-shadowed-variable
    UiUser.subscribe((data1)=>{
      this.data = data1;
      console.log(data1);
    });
    if (data) {
      const userData = JSON.parse(data);
      this.store.dispatch(setUser({payload: userData}));
    }

  }
}
