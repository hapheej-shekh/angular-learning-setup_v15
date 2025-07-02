import { Routes } from "@angular/router";

// Load after angular initial load completed

export const PRELOAD_ROUTES: Routes = [
    { 
        path: 'selfExample',
        loadComponent: () => import('./parameter-decorators/self-example/self-example').then(c => c.SelfExample)
    }, { 
        path: 'skipSelfExample',
        loadComponent: () => import('./parameter-decorators/skip-self-example/skip-self-example').then(c => c.SkipSelfExample)
    }, { 
        path: 'optionalExample',
        loadComponent: () => import('./parameter-decorators/optional-example/optional-example').then(c => c.OptionalExample)
    }, { 
        path: 'injectExample',
        loadComponent: () => import('./parameter-decorators/inject-example/inject-example').then(c => c.InjectExample)
    }
];