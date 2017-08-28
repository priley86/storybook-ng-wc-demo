import { Component, AfterViewInit } from '@angular/core';
import { define } from 'skatejs';
import { PfHelloWebComponent } from './pf-hello';

define(PfHelloWebComponent);

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements AfterViewInit {
  name = '';

  constructor() {}

  ngAfterViewInit() {
    this.name = 'David';
  }
}
