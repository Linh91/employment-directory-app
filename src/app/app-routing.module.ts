import { DirectoryNewComponent } from './directory/directory-new/directory-new.component';
import { DirectoryStartComponent } from './directory/directory-start/directory-start.component';
import { HomeComponent } from './core/home/home.component';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'new', component: DirectoryNewComponent },
  { path: 'directory', component: DirectoryStartComponent },
  // { path: 'recipes', loadChildren: './recipes/recipes.module#RecipeModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
