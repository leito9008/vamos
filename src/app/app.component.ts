import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { PersistenceManager } from '../providers';
import { FirstPage, Page1Page, Page2Page } from '../pages';

@Component({
    templateUrl: 'app.html'
})
export class VamosApp {
    @ViewChild(Nav) nav: Nav;

    rootPage: any = FirstPage;

    pages: Array<{ title: string, component: any }>;

    constructor(public platform: Platform) {
        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Page One', component: Page1Page },
            { title: 'Page Two', component: Page2Page }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            Splashscreen.hide();
            PersistenceManager.connect();
        });
    }

    openPage(page) {
        this.nav.setRoot(page.component);
    }
}
