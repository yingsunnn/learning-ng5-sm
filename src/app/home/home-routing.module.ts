import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HotEntriesComponent } from './hot-entries/hot-entries.component';
import { RandomEntriesComponent } from './random-entries/random-entries.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'hot-entries',
        pathMatch: 'full'
      },
      {
        path: 'hot-entries',
        component: HotEntriesComponent
      },
      {
        path: 'random-entries',
        component: RandomEntriesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
