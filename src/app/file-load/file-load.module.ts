import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { FileLoadRoutingModule } from './file-load-routing.module';
import { FileLoadComponent } from './file-load.component';

@NgModule({
  declarations: [FileLoadComponent],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FileLoadRoutingModule
  ]
})
export class FileLoadModule { }
