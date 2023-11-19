import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
    selector: "[appHailater]"
})
export class HailaterDirectiv{

    @HostBinding('style.background')
    background = 'none'

    @HostListener('mouseenter')
    addHailater(){
      this.background ='red'
    }

    @HostListener('mouseleave')
    removeHailater(){
       this.background='none'
    }

}