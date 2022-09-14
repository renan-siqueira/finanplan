import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-field-error',
  template: `
    <p class="text-danger">
      {{ errorMessage }}
    </p>
  `,
  styleUrls: ['./form-field-error.component.css']
})
export class FormFieldErrorComponent implements OnInit {

  @Input('form-control') formControl: FormControl;

  constructor() { }

  ngOnInit() {
  }

  public get errorMessage(): string | null {
    if(this.mustShowErrorMessage()) {
      return this.getErrorMessage();
    } else {
      return null;
    }
  }

  protected mustShowErrorMessage(): boolean {
    return this.formControl.invalid && this.formControl.touched;
  }

  protected getErrorMessage(): string | null {
    if(this.formControl.errors.required) {

      return "*Campo obrigatório";
    
    } else if(this.formControl.errors.email) {

      return "*Digite um email válido"
    
    } else if (this.formControl.errors.minlength) {

      const requiredLength = this.formControl.errors.minlength.requiredLength;
      return `*Este campo deve ter no mínimo ${requiredLength} caracteres`;

    } else if(this.formControl.errors.maxlength) {

      const requiredLength = this.formControl.errors.maxlength.requiredLength;
      return `*Este campo deve ter no máximo ${requiredLength} caracteres`;
    }
  }
}
