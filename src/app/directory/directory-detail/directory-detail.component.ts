import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import * as DirectoryActions from './../store/directory.actions';
import * as directoryReducer from '../store/directory.reducers';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-directory-detail',
  templateUrl: './directory-detail.component.html',
  styleUrls: ['./directory-detail.component.css']
})
export class DirectoryDetailComponent implements OnInit {
  directoryState: Observable<directoryReducer.State>;
  id: number;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private store: Store<directoryReducer.DirectoryState>) { }

  editDirectory() {
    console.log('edit');
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

  deleteDirectory() {
    console.log('delete');
    console.log('id', this.id);
    this.store.dispatch(new DirectoryActions.DeleteDirectory(this.id));
    this.router.navigate(['/directory'], {relativeTo: this.route});
  }

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
