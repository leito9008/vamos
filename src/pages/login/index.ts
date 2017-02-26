import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { MainPage } from '../';

@Component({
    selector: 'vamos-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    // TODO add country code
    private account: { phone: string } = {
        phone: '+542214180840'
    };

    constructor(
        public navCtrl: NavController,
        public toastCtrl: ToastController
    ) {
    }

    login() {
        // this.userProvider.login(this.account);
        this.navCtrl.setRoot(MainPage);
        // TODO save user in storage
    }
}
