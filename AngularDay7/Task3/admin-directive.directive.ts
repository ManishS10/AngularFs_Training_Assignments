import { Directive,Input,TemplateRef,ViewContainerRef,OnChanges } from '@angular/core';

@Directive({
  selector: '[appAdminDirective]'
})
export class AdminDirectiveDirective implements OnChanges{

  constructor(private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>)
  {

  }

  @Input()
  appAdminDirective:string="";


  admin_users:any[] = ['Scott','Smith','James','Robert'];

  ngOnChanges() {

    if(this.admin_users.includes(this.appAdminDirective))
    {
        // show ---  add the dom element
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
    else
    {
      // hide---  removes the dom element
      this.viewContainer.clear();
    }
  }

}
