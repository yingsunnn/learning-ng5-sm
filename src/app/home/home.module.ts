import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotEntriesComponent } from './hot-entries/hot-entries.component';
import { RandomEntriesComponent } from './random-entries/random-entries.component';
import { EntryListComponent } from '../entry/entry-list/entry-list.component';
import { EntryCardComponent } from '../entry/entry-card/entry-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent,
    HotEntriesComponent,
    RandomEntriesComponent,
    EntryListComponent,
    EntryCardComponent
  ]
})
export class HomeModule { }
