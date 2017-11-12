import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { EntryListComponent } from './entry-list/entry-list.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'entry-card', component: EntryCardComponent},
      { path: 'entry-list', component: EntryListComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
