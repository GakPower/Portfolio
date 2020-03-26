import {AfterContentInit, Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appAnimate]',
})
export class AnimateDirective implements AfterContentInit {

  @Input() public appAnimate;

  constructor(private element: ElementRef) {
  }

  ngAfterContentInit(): void {
    const {name = '', duration = 1000, delay = 0} = this.appAnimate;
    this.element.nativeElement.style.opacity = '0';
    this.element.nativeElement.style.animationName = name;
    this.element.nativeElement.style.animationDuration = duration + 'ms';
    this.element.nativeElement.style.animationDelay = delay + 'ms';
    this.element.nativeElement.style.animationFillMode = 'forwards';
    this.element.nativeElement.style.animationTimingFunction = 'ease-out';
  }

}
