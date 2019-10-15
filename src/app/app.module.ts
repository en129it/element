import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ComponentRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { createCustomElement, NgElementConstructor } from '@angular/elements';

import { InstitutionComponent } from './institution/institution.component';

@NgModule({
  declarations: [
    InstitutionComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule, FormsModule
  ],
  entryComponents: [
    InstitutionComponent
  ],
  providers: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const customClass: NgElementConstructor<InstitutionComponent> = createCustomElement(InstitutionComponent, {injector: this.injector});
/*    
    const superConnectedCallback = customClass.prototype.connectedCallback;

    customClass.prototype.connectedCallback = function() {
      superConnectedCallback.apply(this);
      const componentRef: ComponentRef<InstitutionComponent> = this.ngElementStrategy.componentRef;
      const component = componentRef.instance;
    };
*/    
    window.customElements.define('app-institution', customClass);
  }
}
