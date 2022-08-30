import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRecipeBorderCard]'
})
export class RecipeBorderCardDirective {

  private initialColor: string = '#1F618D;'

  constructor
    (private el: ElementRef) {
    this.setBorder(this.initialColor)
  }

  @Input('RecipeBorderCardDirective') borderColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor);

  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);

  }

  setBorder(color: string) {
    this.el.nativeElement.style.border = ` solid 2px ${color}`
  }

}
