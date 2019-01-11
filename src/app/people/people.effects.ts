import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ActionTypes, Load, Request, RequestFailed, SetFilter } from './people.actions';
import { getPeopleFilter, State } from './people.reducer';
import { Filter } from './people.type';
import { PeopleApiService } from './services/people-api.service';

@Injectable()
export class PeopleEffects {
  constructor(
    private store: Store<State>,
    private actions$: Actions,
    private peopleApiService: PeopleApiService
	) {}
	
	private fetchPeople(filter: Filter) {
		return this.peopleApiService.fetchPeople(filter).pipe(
			map(people => new Load(people)),
			catchError(error => of(new RequestFailed()))
		);
	}

  @Effect()
  request$ = this.actions$.pipe(
    ofType(ActionTypes.Request),
    withLatestFrom(this.store.select(getPeopleFilter)),
    switchMap(([action, filter]) => this.fetchPeople(filter))
  );

  @Effect({ dispatch: false })
  setFilter$ = this.actions$.pipe(
    ofType(ActionTypes.SetFilter),
    tap((action: SetFilter) => this.store.dispatch(new Request()))
  );
}
