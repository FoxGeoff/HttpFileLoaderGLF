import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileLoadComponent } from './file-load.component';

const routes: Routes = [
  { path: 'fileload', component: FileLoadComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FileLoadRoutingModule { }
