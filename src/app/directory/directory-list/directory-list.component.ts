import { Directory } from './../directory.model';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as directoryReducer from '../store/directory.reducers';

@Component({
  selector: 'app-directory-list',
  templateUrl: './directory-list.component.html',
  styleUrls: ['./directory-list.component.css']
})
export class DirectoryListComponent implements OnInit {
  directoryState: Observable<directoryReducer.State>;

  constructor(private store: Store<directoryReducer.DirectoryState>) { }

  ngOnInit() {
    console.log('hello', this.store.select('directories'));
    this.directoryState = this.store.select('directories');
  }

}
