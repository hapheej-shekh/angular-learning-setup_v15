import { Component, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '../tooltip-directive';

@Component({
    selector: 'host-binding-example',
    standalone: true,
    imports: [CommonModule, TooltipDirective],
    templateUrl: './host-binding-example.html',
    styleUrls: ['./host-binding-example.css']
})
export class HostBindingExample {

    @HostBinding('style.color') color = 'green';
    @HostBinding('class.active') isActive = false;

    toggleActive() {
        this.isActive = !this.isActive;
        this.color = this.isActive ? 'red' : 'green';
    }
}
