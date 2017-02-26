// TODO remove this example pages
import { Page1 } from './page1';
import { Page2 } from './page2/page2';
export const Page1Page = Page1;
export const Page2Page = Page2;

import { LoginPage } from './login';
import { EventsPage } from './events';

// When the user does not have a session yet
const FirstPage = LoginPage;
// After login, show the main page
const MainPage = EventsPage;

export {
    FirstPage,
    MainPage,
    LoginPage,
    EventsPage
}
