import { Component, Inject, OnInit } from '@angular/core';

import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CustomerModels } from 'src/app/Models/Customer.models';
import { CustomerService } from 'src/app/Services/customer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customerview',
  templateUrl: './customerview.component.html',
  styleUrls: ['./customerview.component.scss']
})
export class CustomerviewComponent implements OnInit {

  formu: FormGroup ;
  constructor(public dialogRefc: MatDialogRef<CustomerviewComponent>, public dialogRef: MatDialog,
    public fb: FormBuilder,  private _customerService: CustomerService,
    @Inject(MAT_DIALOG_DATA) public data: any,

  ) {
    this.formu = this.fb.group({

      nmcliente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      dsdireccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      dscorreo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      telefono: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      cdtelefonoalter: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      cdcelular: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      idcargo: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      cargo: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      idciudad: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      ciudad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      fenacimiento: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      genero: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      idcomunidad: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      comunidad: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      empresalabora: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      iddivision: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      cus_dsdivision: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      idpais: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(30)]],
      pais: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      hobbies: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    })
  }

  ngOnInit(): void {

    this._customerService.getCustomerId(this.data.id).subscribe((data: CustomerModels) => {

      this.formu.patchValue({
        nmcliente: data.nmcliente,
        nombres: data.nombres,
        apellidos: data.apellidos,
        dsdireccion: data.dsdireccion,
        dscorreo: data.dscorreo,
        telefono: data.telefono,
        cdtelefonoalter: data.cdtelefonoalter,
        cdcelular: data.cdcelular,
        idcargo: data.idcargo,
        cargo: data.cargo,
        idciudad: data.idciudad,
        ciudad: data.ciudad,
        fenacimiento: data.fenacimiento,
        genero: data.genero,
        idcomunidad: data.idcomunidad,
        comunidad: data.comunidad,
        empresalabora: data.empresalabora,
        iddivision: data.iddivision,
        cus_dsdivision: data.cus_dsdivision,
        idpais: data.idpais,
        pais: data.pais,
        hobbies: data.hobbies

      })

    },(error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error',

      })

    })
  }
  Save(Data: CustomerModels) {
    // this._productService.PutProductId(this.data.id,Data)
    // .subscribe(data => console.log(data))
    // this._productService.PostProduct(Data).subscribe(data => console.log(data))
    // this.dialogRefc.close()
  }
}

