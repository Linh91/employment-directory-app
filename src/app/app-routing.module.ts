import { DirectoryNewComponent } from './directory-new/directory-new.component';
import { HomeComponent } from './core/home/home.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: DirectoryNewComponent },
  { path: 'directory', loadChildren: './directory/directory.module#DirectoryModule' },
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
