import { DirectoryDetailComponent } from './directory-detail/directory-detail.component';
import { DirectoryComponent } from './directory.component';
import { DirectoryNewComponent } from './directory-new/directory-new.component';
import { DirectoryStartComponent } from './directory-start/directory-start.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const directoryRoutes: Routes = [
  { path: '', component: DirectoryComponent, children: [
    { path: '', component: DirectoryStartComponent },
    { path: 'new', component: DirectoryNewComponent },
    { path: ':id', component: DirectoryDetailComponent },
    { path: ':id/new', component: DirectoryNewComponent },
  ] },
];

@NgModule({
  imports: [RouterModule.forChild(directoryRoutes)],
  exports: [RouterModule]
})
export class DirectoryRoutingModule {}
