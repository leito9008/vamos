import { User } from './User';
import { Comment } from './Comment';
import { Invitation } from './Invitation';
import { EventStatus } from './EventStatus';

export class Event {

    public name: string;
    public description: string;
    public location: string;
    public time: Date;
    public status: EventStatus;

    public owner: User;
    public admins: User[];
    public invitations: Invitation[];
    public comments: Comment[];

    constructor(name: string, description: string, location: string, time: Date, owner: User, status: EventStatus) {
        this.name = name;
        this.description = description;
        this.location = location;
        this.time = time;
        this.owner = owner;
        this.status = status;
    }
}
