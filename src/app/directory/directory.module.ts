import { DirectoryEditComponent } from './directory-edit/directory-edit.component';
import { StoreModule } from '@ngrx/store';
import { DirectoryComponent } from './directory.component';
import { DirectoryDetailComponent } from './directory-detail/directory-detail.component';
import { DirectoryNewComponent } from './directory-new/directory-new.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { DirectoryRoutingModule } from './directory-app.module';
import { DirectoryStartComponent } from './directory-start/directory-start.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryItemComponent } from './directory-list/directory-item/directory-item.component';
import { directoryReducer } from './store/directory.reducers';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DirectoryRoutingModule,
    StoreModule.forFeature('directories', directoryReducer),
    ReactiveFormsModule
  ],
  declarations: [
    DirectoryComponent,
    DirectoryStartComponent,
    DirectoryNewComponent,
    DirectoryEditComponent,
    DirectoryListComponent,
    DirectoryDetailComponent,
    DirectoryItemComponent
  ]
})
export class DirectoryModule { }
