import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ActionTypes, PeopleActions } from './people.actions';
import { Filter, Person } from './people.type';

export interface State {
  list: Person[];
  filter: Filter;
}

export const initialState: State = {
    list: [],
    filter: {
        name: null,
        age: null,
        gender: null,
    }
};

export function PeopleReducer(state = initialState, action: PeopleActions): State {
  switch (action.type) {
    case ActionTypes.Load:
      return {
          ...state,
          list: action.people
      };
    case ActionTypes.SetFilter:
      return {
          ...state,
          filter: action.filter
      };
  }
  return state;
}


export const getPeopleState = createFeatureSelector<State>('people');

export const getPeopleList = createSelector(
    getPeopleState,
    state => state.list
);
export const getPeopleFilter = createSelector(
    getPeopleState,
    state => state.filter
);