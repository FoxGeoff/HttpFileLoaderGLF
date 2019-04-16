import { Component, OnInit } from '@angular/core';
import { FileLoadService } from './file-load.service';

@Component({
  selector: 'app-file-load',
  templateUrl: './file-load.component.html',
  styleUrls: ['./file-load.component.css']
})
export class FileLoadComponent implements OnInit {

  message: string;

  constructor(private uploaderService: FileLoadService) {}

  ngOnInit() {
  }

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      this.uploaderService.upload(file).subscribe(
        msg => {
          input.value = null;
          this.message = msg;
        }
      );
    }
  }
  
}
