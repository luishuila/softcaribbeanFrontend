import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { CustomerModels } from 'src/app/Models/Customer.models';
import { CustomerService } from './../../../Services/customer.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-customersave',
  templateUrl: './customersave.component.html',
  styleUrls: ['./customersave.component.scss']
})
export class CustomersaveComponent implements OnInit {
  formu: FormGroup | undefined;
  constructor(public dialogRefc: MatDialogRef<CustomersaveComponent>, public dialogRef: MatDialog, public fb: FormBuilder, private _customerService: CustomerService) { }

  ngOnInit(): void {
    this.formu = this.fb.group({
      nmcliente: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(30)]],
      nombres: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      apellidos: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      dsdireccion: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
      dscorreo: ['',[Validators.required, Validators.minLength(4),Validators.email,Validators.maxLength(30),Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[A-Za-z]{2,4}$")]],
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
  Save(Data: CustomerModels) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    this.dialogRef.afterAllClosed
    this.dialogRefc.close()
    console.log(Data)

    this._customerService.PortCustomer(Data).subscribe(data => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Se guardo con exíto',
        showConfirmButton: false,
        timer: 1500
      })

    },(error)=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error',

      })

    })

    dialogConfig.disableClose = true;
    this.dialogRef.afterAllClosed
    this.dialogRefc.close()
  }

}
