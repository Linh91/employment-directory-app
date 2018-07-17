import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';

import * as directoryReducer from '../store/directory.reducers';
import * as DirectoryActions from './../store/directory.actions';

@Component({
  selector: 'app-directory-edit',
  templateUrl: './directory-edit.component.html',
  styleUrls: ['./directory-edit.component.css']
})
export class DirectoryEditComponent implements OnInit {
  id: number;
  editDirectoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<directoryReducer.DirectoryState>) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.initForm();
      }
    );
  }

  onSubmit() {
    console.log('values', this.editDirectoryForm.value);
    this.store.dispatch(new DirectoryActions.UpdateDirectory({
      index: this.id,
      updateDirectory: this.editDirectoryForm.value
    }));
    console.log(this.store.select('directories'));
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route});
  }

  private initForm() {
      let dirName = '';
      let dirAge = 0;
      let dirTitle = '';
      let dirAddress = '';
      let dirTelephone = '';

    this.store.select('directories')
    .pipe(take(1))
    .subscribe((directoryState: directoryReducer.State) => {
      const directory = directoryState.directories[this.id];
      dirName = directory.name;
      dirAge = directory.age;
      dirTitle = directory.title;
      dirAddress = directory.address;
      dirTelephone = directory.telephone;
    });

    this.editDirectoryForm = new FormGroup({
      'name': new FormControl(dirName),
      'age': new FormControl(dirAge),
      'title': new FormControl(dirTitle),
      'address': new FormControl(dirAddress),
      'telephone': new FormControl(dirTelephone),
    });

    this.editDirectoryForm.valueChanges.subscribe(console.log);
  }
}
