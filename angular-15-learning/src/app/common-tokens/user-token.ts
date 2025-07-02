import { InjectionToken } from "@angular/core";


// InjectionToken for injecting the interface, providing input from main.ts
export const USER_TOKEN = new InjectionToken<User>('USER_TOKEN');

export interface User {
    id: number;
    name: string;
    email: string;
}




