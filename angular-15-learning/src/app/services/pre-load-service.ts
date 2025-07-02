import { Injectable } from '@angular/core';
import { PRELOAD_ROUTES } from '../route-preload';

@Injectable({
    providedIn: 'root'
})
export class PreLoadService {

    /*  This service loads Components after angular initial loading completes,
        but before the Lazy-Load components
        [If not navigated manually for lazy-load component before 5 seconds delay defined in root-app]
    */

    /* Loads all standalone lazy components manually */
    public load(): void {
        for (const route of PRELOAD_ROUTES) {
            if (route.loadComponent) {
                route.loadComponent(); // Triggers preload of component
                console.log('Pre Loaded (After initial setup): ', route.path);
            }
        }
    }
}