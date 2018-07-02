import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as directoryReducer from '../store/directory.reducers';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-directory-detail',
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.css']
})
export class DirectoryDetailComponent implements OnInit {
  directoryState: Observable<directoryReducer.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private store: Store<directoryReducer.DirectoryState>) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.directoryState = this.store.select('directories');
      }
    );
  }

}
