import { Component, OnInit, Input, OnChanges, SimpleChanges, Inject, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DOCUMENT } from '@angular/common';


//encapsulation : ViewEncapsulation.Native then no need to import CSS in index.html
//encapsulation : ViewEncapsulation.Emulated then need to import CSS in index.html


@Component({
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.scss'],
  encapsulation : ViewEncapsulation.Emulated
})
export class InstitutionComponent implements OnInit, OnChanges {

  private formElem: HTMLFormElement;

  public institutionForm = new FormGroup({
    bicCode : new FormControl(''),
    institutionName : new FormControl('')
  });

  @Input()
  set form(formId: string) {
    this.formElem = this.document.getElementById(formId) as HTMLFormElement;

    const formElems = this.formElem.elements;
    for (let i = 0; i < formElems.length; i++) {
      const formElem = formElems.item(i) as HTMLInputElement;
      const formElemName = formElem.name;

      const controls = this.institutionForm.controls;
      const control = controls[formElemName];
      if (control != null) {
        control.setValue(formElem.value);
      }
    }

    this.formElem.addEventListener('submit', (event) => {
      const formElems = this.formElem.elements;
      for (let i = 0; i < formElems.length; i++) {
        const formElem = formElems.item(i) as HTMLInputElement;
        const formElemName = formElem.name;

        const controls = this.institutionForm.controls;
        const control = controls[formElemName];
        if (control != null) {
          formElem.value = control.value;
        }
      }
    });
  }

  constructor(@Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('On changes ', changes);
  }

}
