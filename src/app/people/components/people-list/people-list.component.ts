import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Person } from '../../people.type';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleListComponent implements OnInit {
  @Input() people: Person[] = [];

  constructor() { }

  ngOnInit() {
  }

}
