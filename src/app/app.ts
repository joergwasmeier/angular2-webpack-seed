import {Directive, Component, View, ElementRef} from 'angular2/angular2';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {IComponent} from "./IComponent";

import {TestComp} from "./testcomp/testcomp";


require('./app.less');

@Component({
  selector: 'app',
  template: `
  <input type="text" [value]="title" (input)="changeTitle($event)" autofocus>

  <pre>this.title = {{ title }}</pre>
  ` ,
  directives: [
    TestComp
  ]
})

export class App implements IComponent {
  title: string;

  constructor() {
    this.title = 'Angular 2';
  }

  onInit():void {
    console.log("onInit");
  }

  changeTitle(event:any):void{
    this.title = event.target.value;
  }

  doCheck():void {
  }

  onChanges():void {
  }

  afterContentInit():void {
  }

  afterContentChecked():void {
  }

  afterViewInit():void {
  }

  afterViewChecked():void {
  }

  onDestroy():void {
  }
}
