import {createReducer, on} from '@ngrx/store';
import {setCurrentTitle, setUser} from '@app/root-store/actions/ui-actions';
import {setState} from '@app/core/helpers/ngrx.helpers';

export interface UiState {
  currentTitle: string;
}
export interface User {
  email: string | null;
}
export interface UserState {
  user: User;
}
export const INIT_USER_STATE: UserState = {
  user: {email : null}
};
export const INIT_UI_STATE: UiState = {
  currentTitle: undefined
};

export const UiReducer = createReducer(
  INIT_UI_STATE,
  on(setCurrentTitle, (state, {payload: currentTitle}) =>
    setState({currentTitle}, state)
  )
);

export const UserReducer = createReducer(
  INIT_USER_STATE,
  on(setUser, (state, {payload: user}) =>
    setState({user}, state)
  )
);


// SELECTORS
export const getCurrentTitle = (state: UiState) => state ? state.currentTitle : null;
export const getUserData = (state: UserState) => state ? state.user : null;
