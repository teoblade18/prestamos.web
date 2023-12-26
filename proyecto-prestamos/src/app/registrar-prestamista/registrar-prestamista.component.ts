import { Component } from '@angular/core';
import { FormGroup, FormControl, NgModel , Validators, FormBuilder} from '@angular/forms';
import { Prestamista } from '../../Class/Prestamista';

@Component({
  selector: 'app-registrar-prestamista',
  templateUrl: './registrar-prestamista.component.html',
  styleUrls: ['../app.component.css', './registrar-prestamista.component.css'],
})
export class RegistrarPrestamistaComponent {

  constructor(private fb: FormBuilder){

  }

  //#region getters
  get nombreUsuario(){
    return this.formPrestamista.get('nombreUsuario') as FormControl;
  }

  get contrasenia(){
    return this.formPrestamista.get('contrasenia') as FormControl;
  }

  get email(){
    return this.formPrestamista.get('email') as FormControl;
  }

  get nombre(){
    return this.formPrestamista.get('nombre') as FormControl;
  }

  get capital(){
    return this.formPrestamista.get('capital') as FormControl;
  }

  get numeroCuenta(){
    return this.formPrestamista.get('numeroCuenta') as FormControl;
  }
  //#endregion

  formPrestamista = this.fb.group({
    'nombreUsuario' : ['',Validators.required],
    'contrasenia' : ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{6,}$/)]],
    'nombre' : ['', [Validators.required, Validators.pattern(/^[a-zA-ZÀ-ÿ\s]+$/)]],
    'capital' : ['', [Validators.required, Validators.min(0)]],
    'numeroCuenta' : ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    'email' : ['', [Validators.required, Validators.email]]
  });

  prestamista: Prestamista = {
    nombre: '',
    capital: 0,
    numeroCuenta: '',
    usuario: {
      nombreUsuario: '',
      contrasenia: '',
      email: ''
    },
  };

  validarFormulario() {
    this.prestamista = {
      nombre: this.nombreUsuario.value,
      capital: this.capital.value,
      numeroCuenta: this.numeroCuenta.value,
      usuario: {
        nombreUsuario: this.nombreUsuario.value,
        contrasenia: this.contrasenia.value,
        email: this.email.value
      },
    };

    console.log(this.prestamista);
  }
}
