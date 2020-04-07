import {Action, ActionReducerMap, createFeatureSelector, createSelector} from '@ngrx/store';

import * as fromUi from './reducers/ui-reducer';
import {InjectionToken} from '@angular/core';

export interface State {
  ui: fromUi.UiState;
  user: fromUi.UserState;
  // more state here
}

// AOT compatibility
export const ROOT_REDUCERS = new InjectionToken<ActionReducerMap<State, Action>>(
  'ROOT_REDUCERS_TOKEN',
  {
    factory: () => ({
      ui: fromUi.UiReducer,
      user: fromUi.UserReducer
    })
  }
);

/// selectors
export const getUiState = createFeatureSelector<fromUi.UiState>('ui');
export const getUserState = createFeatureSelector<fromUi.UserState>('user');

export const getUser = createSelector(getUserState, fromUi.getUserData);
export const getCurrentTitle = createSelector(getUiState, fromUi.getCurrentTitle);





