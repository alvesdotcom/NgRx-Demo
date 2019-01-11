import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PeopleFilterComponent } from './people/components/people-filter/people-filter.component';
import { PeopleListComponent } from './people/components/people-list/people-list.component';
import { PeopleComponent } from './people/people.component';
import { PeopleEffects } from './people/people.effects';
import { PeopleReducer } from './people/people.reducer';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PeopleComponent,
    PeopleListComponent,
    PeopleFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule,
    StoreModule.forRoot({ people: PeopleReducer }),
    EffectsModule.forRoot([PeopleEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
