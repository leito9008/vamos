// TODO remove this 2 imports and replace by LoginProvider
import * as firebase from 'firebase';
import { PersistenceManager } from '../../providers';

import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { MainPage } from '../';

@Component({
    selector: 'vamos-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    // TODO feature: add selectable country code
    private account: { name: string, phone: string } = {
        name: 'Leito',
        phone: '+542214180840'
    };

    constructor(
        public navCtrl: NavController,
        public menuCtrl: MenuController
    ) {
        this.menuCtrl.swipeEnable(false);
    }

    login() {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                console.log('## user', user);
                const database = PersistenceManager.getDatabase();
                database.ref('users/' + user.uid).set({
                    name: this.account.name,
                    phone: this.account.phone
                });
            } else {
                console.log('## no user', user);
            }
        });

        firebase.auth().signInAnonymously().catch((error) => {
            console.log('## errors', error);
        });

        // this.navCtrl.setRoot(MainPage);
    }
}
