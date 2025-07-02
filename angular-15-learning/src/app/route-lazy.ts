import { Routes } from "@angular/router";

export const LAZY_ROUTES: Routes = [
    { 
        path: 'kidzChoice',
        loadComponent: () => import('./kidz-choice/kidz-choice').then(c => c.KidzChoice)
    }, { 
        path: 'injectable',
        loadComponent: () => import('./common-examples/injectable-example/injectable-example').then(c => c.InjectableExample)
    }, { 
        path: 'moduleDesc',
        loadComponent: () => import('./common-examples/module-desc/module-desc').then(c => c.ModuleDesc)
    }, { 
        path: 'hostListenerExample',
        loadComponent: () => import('./common-examples/host-listener-example/host-listener-example').then(c => c.HostListenerExample)
    }
];