import { Router, ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

import * as directoryReducer from '../store/directory.reducers';
import * as DirectoryActions from './../store/directory.actions';

@Component({
  selector: 'app-directory-new',
  templateUrl: './directory-new.component.html',
  styleUrls: ['./directory-new.component.css']
})
export class DirectoryNewComponent implements OnInit {
  newDirectoryForm: FormGroup;

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
