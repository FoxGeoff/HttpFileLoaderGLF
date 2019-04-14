import { Component, OnInit } from '@angular/core';
import { ConfigService, Config } from './config.service';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.css']
})
export class ConfigComponent implements OnInit {
  error: any;
  headers: string[];
  config: Config;

  constructor(private configService: ConfigService) { }

  ngOnInit() {
  }

  clear() {
    this.config = undefined;
    this.error = undefined;
    this.headers = undefined;
  }

  showConfig() {
    this.configService.getConfig()
      // clone the data object, using its known Config shape
      .subscribe(
        (data: Config) => this.config = { heroesUrl: data['heroesUrl'], textfile: data['textfile'] },
        error => this.error = error
      );
  }

  showConfigResponse() {
    this.configService.getConfigResponse()
      // resp is of type `HttpResponse<Config>`
      .subscribe(resp => {
        // display its headers
        const keys = resp.headers.keys();
        this.headers = keys.map(key =>
          `${key}: ${resp.headers.get(key)}`);

        // access the body directly, which is typed as `Config`.
        /*
        Spread syntax allows an iterable such as an array expression
        or string to be expanded in places where zero or more arguments 
        (for function calls) or elements (for array literals) are
        expected, or an object expression to be expanded in places 
        where zero or more key-value pairs (for object literals) are expected.
        */    
        this.config = { ... resp.body };
      });
  }

  makeError() {
    this.configService.makeIntentionalError().subscribe(
      null,
      error => this.error = error);
  }

}
