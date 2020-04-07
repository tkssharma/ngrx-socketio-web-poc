import {createAction, props} from '@ngrx/store';
import {User} from '../reducers/ui-reducer';
export const setCurrentTitle = createAction(
  '[UI] Set current title',
  props<{payload: string}>()
);
export const setUser = createAction(
  '[UI] Set User Data',
  props<{payload: User}>()
);
