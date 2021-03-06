import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HotEntriesComponent } from './hot-entries/hot-entries.component';
import { RandomEntriesComponent } from './random-entries/random-entries.component';
import { EntryListComponent } from '../entry/entry-list/entry-list.component';
import { EntryCardComponent } from '../entry/entry-card/entry-card.component';
import { AddEntryCardComponent } from './add-entry-card/add-entry-card.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule
  ],
  declarations: [
    HomeComponent,
    HotEntriesComponent,
    RandomEntriesComponent,
    EntryListComponent,
    EntryCardComponent,
    AddEntryCardComponent
  ]
})
export class HomeModule { }
