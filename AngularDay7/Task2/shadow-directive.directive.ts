import { Directive,Input,OnInit,ElementRef } from '@angular/core';

@Directive({
  selector: '[appShadowDirective]'
})
export class ShadowDirectiveDirective implements OnInit{

  constructor(private element:ElementRef) { }

  @Input()
  appShadowDirective:string  = "";

  ngOnInit(): void {

    if(this.appShadowDirective == "")
     {
        this.appShadowDirective = "Red";
     }

     this.element.nativeElement.style.color = this.appShadowDirective;
     
    
  }

}
