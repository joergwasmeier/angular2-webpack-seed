/**
 * Created by creativecode on 22.11.15.
 */

import {Directive, Component, View, ElementRef} from 'angular2/angular2';

@Component({
  selector: 'testcomp',
  template: require('./testcomp.html')
})

export class TestComp{
  constructor(){
    console.log("hal");
  }
}
