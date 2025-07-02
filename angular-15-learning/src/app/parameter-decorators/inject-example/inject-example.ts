import { Component, Inject, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Injectable } from '@angular/core';
import { User, USER_TOKEN } from 'src/app/common-tokens/user-token';

@Component({
    selector: 'inject-example',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './inject-example.html',
    styleUrls: ['./inject-example.css']
})
export class InjectExample {

    /*  TypeScript don't inject Interfaces automatically &
        'MULTI_SERVICES' from main.ts */

    constructor(@Inject(USER_TOKEN) public user: User,
        @Inject('MULTI_SERVICES') public services: any[]) {

        // { id: 1, name: 'Arham', email: 'arham@example.com' } from main.ts
        console.log(this.user);

        this.services.forEach((value, index, array) => {
            console.log( (index+1) + ' => ' + value.getData() );
        });
    }

    /*  Can also give any tpye, 'USER_TOKEN' will define actual type at runtime

    constructor(@Inject(USER_TOKEN) public user: any,
        @Inject('MULTI_SERVICES') public services: any[]) {

        // { id: 1, name: 'Arham', email: 'arham@example.com' } from main.ts
        console.log(this.user);

        this.services.forEach((value, index, array)=>{
            console.log(index+' => '+value);
        });
    }
    */
}
