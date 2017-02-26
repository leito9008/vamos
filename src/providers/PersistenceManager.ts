import * as firebase from 'firebase';

export class PersistenceManager {

    private static database: firebase.database.Database;

    private static connectionParameters = {
        apiKey: "AIzaSyChs6z9Vlkzi13dlttCNP0UL479PLcjZkw",
        authDomain: "vamos-4297b.firebaseapp.com",
        databaseURL: "https://vamos-4297b.firebaseio.com",
        storageBucket: "vamos-4297b.appspot.com",
        messagingSenderId: "1040468183444"
    }

    public static connect(): void {
        firebase.initializeApp(this.connectionParameters);
    }

    public static getDatabase() {
        if(!this.database) {
            this.database = firebase.database();
        }

        return this.database;
    }
}
