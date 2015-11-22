/// <reference path="../typings/_custom.d.ts" />

import {bootstrap} from 'angular2/angular2';

import {App} from './app';

/*
 * Bootstrap our Angular app with a top level component `App` and inject
 * our Services and Providers into Angular's dependency injection
 */
bootstrap(App, []);
