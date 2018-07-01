import { DirectoryComponent } from './directory.component';
import { DirectoryDetailComponent } from './directory-detail/directory-detail.component';
import { DirectoryEditComponent } from './directory-edit/directory-edit.component';
import { DirectoryListComponent } from './directory-list/directory-list.component';
import { DirectoryRoutingModule } from './directory-app.module';
import { DirectoryStartComponent } from './directory-start/directory-start.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectoryItemComponent } from './directory-list/directory-item/directory-item.component';

@NgModule({
  imports: [
    CommonModule,
    DirectoryRoutingModule
  ],
  declarations: [
    DirectoryComponent,
    DirectoryStartComponent,
    DirectoryEditComponent,
    DirectoryListComponent,
    DirectoryDetailComponent,
    DirectoryItemComponent
  ]
})
export class DirectoryModule { }
