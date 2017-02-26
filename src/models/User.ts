import { Notification } from './';

export class User {

    public name: string;
    public phone: string;
    public notifications: Notification[];

    constructor(name: string, phone: string) {
        this.name = name;
        this.phone = phone;
        this.notifications = [];
    }

}
