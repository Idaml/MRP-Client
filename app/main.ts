/// <reference path="./main.d.ts"/>
import 'core-js';
import 'zone.js';

import 'bootstrap/dist/css/bootstrap.css';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
