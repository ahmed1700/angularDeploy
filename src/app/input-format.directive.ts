import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[InputFormat]'
})
export class InputFormatDirective {

  constructor(private ref: ElementRef) { }
  @Input('format') format;

  @HostListener('focus') onFocus() {
    console.log('on Focus Fired')
  }

  @HostListener('blur') onBlur() {
    // console.log('on Blur Fired')
    let valueofTxt: string = this.ref.nativeElement.value;
    //this.ref.nativeElement.
    if (this.format == 'toLowerCase')
      this.ref.nativeElement.value = valueofTxt.toLowerCase();
    else if (this.format == 'toUpperCase')
      this.ref.nativeElement.value = valueofTxt.toUpperCase();
  }

}
