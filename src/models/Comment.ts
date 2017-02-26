import { User } from './';

export class Comment {

    public owner: User;
    public text: string;

    constructor(owner: User, text: string) {
        this.owner = owner;
        this.text = text;
    }

}
