import { AfterViewInit, Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { MatDialog } from '@angular/material/dialog';
import { CustomerviewComponent } from '../customerview/customerview.component';
import { CustomerupdateComponent } from '../customerupdate/customerupdate.component';
import { CustomersaveComponent } from '../customersave/customersave.component';
import { CustomerService } from 'src/app/Services/customer.service';
import { CustomerModels } from './../../../Models/Customer.models';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-customerlist',
  templateUrl: './customerlist.component.html',
  styleUrls: ['./customerlist.component.scss']
})
export class CustomerlistComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSource: MatTableDataSource<CustomerModels> | any;

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;
  @ViewChild(MatSort) sort: MatSort | undefined;

  constructor(private CustomerService: CustomerService, public dialog: MatDialog) {
    this.CustomerService.getCustomer().subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    },(error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error',

      })

    })

  }

  ngAfterViewInit() {

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  save() {
    const dialogRef = this.dialog.open(CustomersaveComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  update(id: number) {
    console.log(id)
    const dialogRef = this.dialog.open(CustomerupdateComponent,
      {
        data: { id: id }
      }
    );

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  view(id: number) {
    console.log(id)
    const dialogRef = this.dialog.open(CustomerviewComponent,
      {
        data: { id: id }
      }
    );

    dialogRef.afterClosed().subscribe(result => {

    });
  }
  deleteProduct(id: number) {
    this.CustomerService.DeleteCustomer(id).subscribe((data:any) => {
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: data.message,
        showConfirmButton: false,
        timer: 1500
      })

    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error',

      })

    })
  }
  ngOnInit(): void {
  }
}

/** Builds and returns a new User. */
