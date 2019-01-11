import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Filter, Gender, Person } from '../people.type';

@Injectable({
  providedIn: 'root'
})
export class PeopleApiService {

  fetchPeople(filter: Filter): Observable<Person[]> {
    return of(this.filterPeople(this.people, filter));
  }

  private filterPeople(people: Person[], filter: Filter): Person[] {
    return people
      .filter(person => !filter.name || person.name.toLowerCase().includes(filter.name.toLowerCase()))
      .filter(person => !filter.age || person.age == filter.age)
      .filter(person => !filter.gender || person.gender == filter.gender);
  }

  private get people(): Person[] {
    return [
      { name: 'Ricardo', age: 22, gender: Gender.Male },
      { name: 'David', age: 31, gender: Gender.Male },
      { name: 'Sofia', age: 18, gender: Gender.Female },
      { name: 'John Doe', age: 18, gender: Gender.Unknown },
      { name: 'Patrícia', age: 18, gender: Gender.Female },
      { name: 'Sergio', age: 18, gender: Gender.Male },
    ];
  }
}
