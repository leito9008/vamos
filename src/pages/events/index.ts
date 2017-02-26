import { Component } from '@angular/core';

@Component({
    selector: 'vamos-events',
    templateUrl: 'events.html'
})
export class EventsPage {

    private events;

    constructor() {
        this.events = ['event1', 'event2'];
    }

}
