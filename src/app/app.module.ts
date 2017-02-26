import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { VamosApp } from './app.component';
import { LoginPage, EventsPage, Page1Page, Page2Page } from '../pages';

const pages = [
    VamosApp,
    LoginPage,
    EventsPage,
    // TODO remove this example pages
    Page1Page,
    Page2Page
];

@NgModule({
    declarations: pages,
    imports: [
        IonicModule.forRoot(VamosApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: pages,
    providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
