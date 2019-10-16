import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector, ComponentRef } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { createCustomElement, NgElementConstructor } from '@angular/elements';

import { InstitutionComponent } from './institution/institution.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    InstitutionComponent
  ],
  imports: [
    BrowserModule, MatButtonModule, ReactiveFormsModule, FormsModule, NoopAnimationsModule
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
