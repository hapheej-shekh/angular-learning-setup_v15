import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[tooltip]',
    standalone: true
})
export class TooltipDirective {

  @Input('tooltip') tooltipText!: string;

  @HostBinding('style.backgroundColor') background = '#BDB76B';

  @HostBinding('attr.data-tooltip')
  get tooltip() {
    return this.tooltipText;
  }

  @HostListener('mouseenter')
  onEnter() {
    this.background = 'lightyellow';
  }

  @HostListener('mouseleave')
  onLeave() {
    this.background = 'lightpink';
  }
}