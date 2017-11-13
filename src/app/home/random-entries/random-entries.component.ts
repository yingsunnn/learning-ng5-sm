import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { Entry } from '../../models'


@Component({
  selector: 'app-random-entries',
  templateUrl: './random-entries.component.html',
  styleUrls: ['./random-entries.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RandomEntriesComponent implements OnInit {

  entries: Array<Entry> = new Array<Entry>();

  constructor(private http: HttpClient) { }

  ngOnInit() {
    let headers = new HttpHeaders().set("time_zone", "UTC-05:00");

    const params = new HttpParams()
    .set('page', '0')
    .set('size', '10');

    this.http.get<Array<Entry>>('https://13.114.98.107:8443/entries', { headers, params }, )
      .subscribe(data => {
        this.entries = data;
        console.log("success data", data);
      },
      response => {
        console.log("Random call in error", response);
      },
      () => {
        console.log("Random observable is now completed.");
      });
  }

}
