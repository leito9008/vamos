import { Component } from '@angular/core';

import { User, Event } from '../../models';

@Component({
    selector: 'vamos-events',
    templateUrl: 'events.html'
})
export class EventsPage {

    private events;

    constructor() {
        const me = new User('Leandro', '+49015222342');
        this.events = [
            new Event(
                'Vamos a parador!!!',
                'Después si pinta seguimos de joda',
                { name: 'Antares Parador', address: 'Calle 48 n 1448' },
                new Date(),
                me
            ),
            new Event(
                'Nos encontramos en Amsterdam',
                '2x1 hasta las 21',
                { name: 'Amsterdam', address: 'Calle 62 e 2 y 3 n 983' },
                new Date(),
                me
            )
        ];
    }

}
