import { Action } from '@ngrx/store';
import { Filter, Person } from './people.type';
 
export enum ActionTypes {
  Request = '[People] Request',
  RequestFailed = '[People] Request Failed',

  Load = '[People] Load',
  Select = '[People] Select',

  SetFilter  = '[People] Set Filter',
  GetFilter  = '[People] Get Filter',
}

export class Request implements Action {
  readonly type = ActionTypes.Request;
}

export class RequestFailed implements Action {
  readonly type = ActionTypes.RequestFailed;
}

export class Load implements Action {
  readonly type = ActionTypes.Load;
  constructor(public people: Person[]) {}
}
  
export class SetFilter implements Action {
  readonly type = ActionTypes.SetFilter;
  constructor(public filter: Filter) {}
}

export class GetFilter implements Action {
  readonly type = ActionTypes.GetFilter;
}

export type PeopleActions = Load | SetFilter | GetFilter;
