import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './core/home/home.component';
import { HeaderComponent } from './header/header.component';
import { DirectoryDetailComponent } from './src/app/directory/directory-detail/directory-detail.component';
import { DirectoryEditComponent } from './directory/directory-edit/directory-edit.component';
import { DirectoryListComponent } from './directory/directory-list/directory-list.component';
import { DirectoryStartComponent } from './directory/directory-start/directory-start.component';
import { DirectoryNewComponent } from './directory/directory-new/directory-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    DirectoryDetailComponent,
    DirectoryEditComponent,
    DirectoryListComponent,
    DirectoryStartComponent,
    DirectoryNewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
