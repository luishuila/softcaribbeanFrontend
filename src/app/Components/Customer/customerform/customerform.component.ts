import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CustomerModels } from './../../../Models/Customer.models';

@Component({
  selector: 'app-customerform',
  templateUrl: './customerform.component.html',
  styleUrls: ['./customerform.component.scss']
})
export class CustomerformComponent implements OnInit {
  @Input()formu:FormGroup|any
  @Input()btn:any ="BTN"
  @Output() EventSendData:EventEmitter<CustomerModels>;
  constructor() {
    this.EventSendData = new EventEmitter();
  }
  getError(element:string):String|any{
    if( this.formu.get(element).invalid && this.formu.get(element).touched){

      if( this.formu.get(element).errors.pattern){
        return `el campor no es valido`
      }
        if( this.formu.get(element).errors.required){
          return "el campo es obligatorio"
        }
        if( this.formu.get(element).errors.email){
          return `requiere se un email `
        }
        if( this.formu.get(element).errors.minlength){
          return `el campo requiere un minimo de ${this.formu.get(element).errors.minlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.minlength.actualLength} `
        }
        if( this.formu.get(element).errors.maxlength){
          return `el campo requiere un maximo de ${this.formu.get(element).errors.maxlength.requiredLength} caracteres, caracteres actual ${this.formu.get(element).errors.maxlength.actualLength} `
        }
        if( this.formu.get(element).errors.pattern){
          return `comprueba que un email es válido`
        }

    }
  }
  ngOnInit(): void {
  }

  SendButton(){
    if (this.formu.invalid) {
      Object.values(this.formu.controls).forEach((datos:any)=>{
       datos.markAsTouched();
      })
      return ;
    }


    const data:CustomerModels = new CustomerModels(
      this.formu.get("nmcliente").value,
      this.formu.get("nombres").value,
      this.formu.get("apellidos").value,
      this.formu.get("dsdireccion").value,
      this.formu.get("dscorreo").value,
      this.formu.get("telefono").value,
      this.formu.get("cdtelefonoalter").value,
      this.formu.get("cdcelular").value,
      this.formu.get("idcargo").value,
      this.formu.get("cargo").value,
      this.formu.get("idciudad").value,
      this.formu.get("ciudad").value,
      this.formu.get("fenacimiento").value,
      this.formu.get("genero").value,
      this.formu.get("idcomunidad").value,
      this.formu.get("comunidad").value,
      this.formu.get("empresalabora").value,
      this.formu.get("iddivision").value,
      this.formu.get("cus_dsdivision").value,
      this.formu.get("idpais").value,
      this.formu.get("pais").value,
      this.formu.get("hobbies").value
    )
    console.log(data)
    this.EventSendData.emit(data)
  }
}
