import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import * as directoryReducer from '../store/directory.reducers';
import * as DirectoryActions from './../store/directory.actions';

@Component({
  selector: 'app-directory-edit',
  templateUrl: './directory-edit.component.html',
  styleUrls: ['./directory-edit.component.css']
})
export class DirectoryEditComponent implements OnInit {
  newDirectoryForm: FormGroup;

  editMode = false;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<directoryReducer.DirectoryState>) { }

  ngOnInit() {
    this.newDirectoryForm = this.formBuilder.group({
      name: '',
      age: '',
      title: '',
      address: '',
      telephone: ''
    });

    this.newDirectoryForm.valueChanges.subscribe(console.log);
  }

  onSubmit() {
    console.log('values', this.newDirectoryForm.value);
    this.store.dispatch(new DirectoryActions.AddDirectory(this.newDirectoryForm.value));
    console.log(this.store);
    this.router.navigate(['/directory'], {relativeTo: this.route});
  }
}
