import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Filter, Gender } from '../../people.type';


@Component({
  selector: 'app-people-filter',
  templateUrl: './people-filter.component.html',
  styleUrls: ['./people-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PeopleFilterComponent implements OnInit {
  @Input() set filter(filter: Filter) {
    this.form.patchValue(filter);
  }
  @Output() filterChange = new EventEmitter<Filter>();
  
  genders = Gender;
  form = new FormGroup({
    name: new FormControl(''),
    age: new FormControl(''),
    gender: new FormControl(''),
  });
  
  constructor() {
    this.form.valueChanges.subscribe(values => this.filterChange.emit(values))
  }

  ngOnInit() {
  }
}
