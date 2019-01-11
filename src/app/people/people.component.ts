import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import * as PeopleActions from './people.actions';
import { getPeopleFilter, getPeopleList, State } from './people.reducer';
import { Filter, Person } from './people.type';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  people$: Observable<Person[]>;
  filter$: Observable<Filter>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.people$ = this.store.select(getPeopleList);
    this.filter$ = this.store.select(getPeopleFilter).pipe(first());
    this.store.dispatch(new PeopleActions.Request());
  }
  filterChange(filter: Filter) {
    this.store.dispatch(new PeopleActions.SetFilter(filter));
  }
}
